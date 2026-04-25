import { For } from 'solid-js';
import './RemoteTroubleshooting.css';

const RemoteTroubleshooting = () => {
	const items = [
		{
			title: 'QR code does not connect',
			help: 'Make sure BeckerBox is still open on your computer, then rescan the latest QR code from the connect screen.',
		},
		{
			title: 'Phone and computer cannot find each other',
			help: 'Confirm both are on the same Wi-Fi network. Turn off cellular data or VPN on your phone and try again.',
		},
		{
			title: 'Remote opens but buttons do not respond',
			help: 'On the remote, press the options button at the top left, then click reconnect.',
		},
		{
			title: 'Still not working',
			help: 'Use the setup tutorials for a full walkthrough, or contact support with your phone model and computer OS.',
		},
	];

	return (
		<section class="remote-troubleshooting" aria-label="Remote troubleshooting">
			<div class="remote-troubleshooting-heading">
				<p class="remote-troubleshooting-kicker">Troubleshooting</p>
				<h2>Remote not connecting?</h2>
				<p>Try these quick fixes first. Most connection issues are solved in under a minute.</p>
			</div>

			<div class="remote-troubleshooting-list">
				<For each={items}>
					{item => (
						<article class="card remote-troubleshooting-item">
							<div>
								<h3>{item.title}</h3>
								<p>{item.help}</p>
							</div>
						</article>
					)}
				</For>
			</div>

			<div class="card remote-troubleshooting-links">
				<a class="btn light" href="/tutorials.html">Open setup tutorials</a>
				<a class="btn ghost" href="/contact.html">Contact support</a>
			</div>
		</section>
	);
};

export default RemoteTroubleshooting;
