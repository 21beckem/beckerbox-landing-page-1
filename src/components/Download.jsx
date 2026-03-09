import { For, Show, createMemo, createSignal, onMount } from 'solid-js';
import './Download.css';

const Download = (props) => {
  const [releases, setReleases] = createSignal([]);
  const [isLoading, setIsLoading] = createSignal(true);
  const [loadError, setLoadError] = createSignal('');

  const formatDate = (value) => {
    if (!value) return 'Unknown';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Unknown';
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getReleaseSummary = (release) => {
    const summary = release?.body?.split('\n')?.find((line) => line.trim().length > 0);
    return summary ?? 'Release notes available on GitHub.';
  };

  const findAsset = (release, token) => {
    const matcher = new RegExp(`-${token}\\.[a-z0-9]+$`, 'i');
    return release?.assets?.find((asset) => matcher.test(asset?.name ?? '')) ?? null;
  };

  const normalizeRelease = (release) => {
    const windowsAsset = findAsset(release, 'win');
    const macAsset = findAsset(release, 'mac');
    return {
      id: release?.id ?? release?.tag_name ?? release?.name,
      name: release?.name || release?.tag_name || 'Release',
      tag: release?.tag_name || release?.name || 'Release',
      notes: getReleaseSummary(release),
      publishedAt: release?.published_at,
      windows: windowsAsset
        ? {
            name: windowsAsset.name,
            url: windowsAsset.browser_download_url,
            size: windowsAsset.size,
          }
        : null,
      mac: macAsset
        ? {
            name: macAsset.name,
            url: macAsset.browser_download_url,
            size: macAsset.size,
          }
        : null,
    };
  };
  const openDownloadLink = (el) => {
    gtag('event', 'download_release', {
      event_callback: function () {
        console.log('Download event tracked successfully');
      }
    });
    const url = el.currentTarget.getAttribute('href');
    document.getElementById('download-warning').scrollIntoView({ behavior: 'smooth' });
    window.open(url, 'window', 'noopener,noreferrer');
  };

  const normalizedReleases = createMemo(() => releases().map(normalizeRelease));
  const latestRelease = createMemo(() => normalizedReleases()[0] ?? null);
  const archiveReleases = createMemo(() => [...normalizedReleases()]);

  onMount(() => {
    const fetchReleases = async () => {
      try {
        setIsLoading(true);
        setLoadError('');
        const response = await fetch(
          'https://api.github.com/repos/21beckem/beckerbox-public/releases',
        );
        if (!response.ok) {
          throw new Error(`GitHub releases request failed: ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data))
            setReleases([]);
        else
            setReleases(data.sort((a, b) => new Date(b.published_at) - new Date(a.published_at)));
      } catch (error) {
        setLoadError('Unable to load downloads right now. Please check back soon.');
        setReleases([]);
      } finally {
        setIsLoading(false);
      }
    };


    fetchReleases();
  });

  return (
    <section class={`section ${props.slim ? 'slim' : ''} ${props.slimTTop ? 'slim-top' : ''} ${props.slimBottom ? 'slim-bottom' : ''}`} id="download">
      <div class="container">
        <div class="pricing-download">
          <div class="download-card">
            <div class="download-copy">
              <p class="download-kicker">Download</p>
              <h3>Get the latest BeckerBox</h3>
              <p>
                Builds are pulled from GitHub releases. I ship Windows first, and Mac OS
                shows up here as soon as it is ready.
              </p>
              <div class="download-actions">
                <Show
                  when={!isLoading() && latestRelease()?.windows}
                  fallback={<span class="download-soon">Windows coming soon</span>}
                >
                  <button
                    type="button"
                    class="btn primary"
                    href={latestRelease().windows.url}
                    onClick={openDownloadLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-windows" style="font-size: 1.5rem;"></i> Download for Windows
                  </button>
                </Show>
                <Show
                  when={!isLoading() && latestRelease()?.mac}
                  fallback={<span class="download-soon">Mac OS coming soon</span>}
                >
                  <button
                    type="button"
                    class="btn light"
                    href={latestRelease().mac.url}
                    onClick={openDownloadLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-apple" style="font-size: 1.5rem;"></i> Download for Mac
                  </button>
                </Show>
              </div>
              <Show when={loadError()}>
                <p class="download-error">{loadError()}</p>
              </Show>
            </div>
            <div class="download-meta">
              <div>
                <span class="download-label">Latest version</span>
                <strong>{latestRelease()?.tag ?? (isLoading() ? 'Loading...' : 'Unavailable')}</strong>
              </div>
              <div>
                <span class="download-label">Published</span>
                <strong>
                  {latestRelease()
                    ? formatDate(latestRelease().publishedAt)
                    : isLoading()
                    ? 'Loading...'
                    : 'Unknown'}
                </strong>
              </div>
            </div>
          </div>

          <div class="card download-warning" id="download-warning">
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 1.5rem; margin-right: 0.5rem; color: #ff9800;"></i>
            <div>
              <h3>Your computer will probably say that BeckerBox is not recognized or is unsafe.</h3>
              <p>Unfortunately, I cannot fix this warning without paying hundreds of dollars a year to get BeckerBox recognized as "safe". BeckerBox is 100% coded by me. It is safe.</p>
              <p>With your supporting purchases, BeckerBox can be registered as "safe" for future customers.</p>
              <p>If you have questions or concerns, please contact me <a style="text-decoration: underline;" href="/contact.html">here</a></p>
            </div>
          </div>

          <details class="download-archive">
            <summary>All versions and release notes</summary>
            <div class="download-table-wrap">
              <table class="download-table">
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Platform</th>
                    <th>Notes</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  <Show
                    when={!isLoading()}
                    fallback={
                      <tr>
                        <td colSpan="4">Loading releases...</td>
                      </tr>
                    }
                  >
                    <Show
                      when={archiveReleases().length > 0}
                      fallback={
                        <tr>
                          <td colSpan="4">No older releases available yet.</td>
                        </tr>
                      }
                    >
                      <For each={archiveReleases()}>
                        {(release) => (
                          <tr>
                            <td>{release.tag}</td>
                            <td>
                              {release.windows && release.mac
                                ? 'Windows, Mac'
                                : release.windows
                                ? 'Windows'
                                : release.mac
                                ? 'Mac'
                                : 'Unavailable'}
                            </td>
                            <td>{release.notes}</td>
                            <td>
                              <div class="download-link-group">
                                {release.windows && (
                                  <a
                                    class="btn light download-link"
                                    href={release.windows.url}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Windows
                                  </a>
                                )}
                                {release.mac && (
                                  <a
                                    class="btn light download-link"
                                    href={release.mac.url}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Mac
                                  </a>
                                )}
                                {!release.windows && !release.mac && <span>Unavailable</span>}
                              </div>
                            </td>
                          </tr>
                        )}
                      </For>
                    </Show>
                  </Show>
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Download;
