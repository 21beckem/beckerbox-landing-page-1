import './WebAppSection.css';
import RemoteTroubleshooting from './RemoteTroubleshooting';

const WebAppSection = (props) => {
	const sectionClasses = `section ${props.slim ? 'slim' : ''} ${props.slimTTop ? 'slim-top' : ''} ${props.slimBottom ? 'slim-bottom' : ''}`;

	return (
		<section class={sectionClasses} id="web-app">
			<div class="container">
				<div class="webapp-empty-wrap">
					<div class="webapp-empty-hero card">
						<p class="webapp-kicker">BeckerBox Remote</p>
						<h1>Welcome to BeckerBox Remote</h1>
						<p class="webapp-lead">
							You are in the right place. Follow this quick setup to join your game session
							and turn your phone into a controller.
						</p>

						<div class="webapp-badge-row" role="list" aria-label="Connection requirements">
							<span class="webapp-pill" role="listitem">Phone and computer on the same network</span>
							<span class="webapp-pill" role="listitem">Scan session QR code</span>
						</div>

						<div class="webapp-cta-row">
							<a class="btn primary" href="/tutorials.html#connect-controller">Connect tutorial</a>
							<a class="btn ghost" href="/download.html">Download desktop app</a>
						</div>
					</div>

					<div class="webapp-empty-steps" aria-label="Setup steps">
						<div class="card webapp-step">
							<div class="webapp-step-num">1</div>
							<div>
								<h3>Open BeckerBox on your computer</h3>
								<p>Start or host a game session from the desktop app.</p>
							</div>
						</div>
						<div class="card webapp-step">
							<div class="webapp-step-num">2</div>
							<div>
								<h3>Scan and join</h3>
								<p>Scan with this phone and your remote controls will load instantly.</p>
							</div>
						</div>
                        <div class="card webapp-step">
							<div class="webapp-step-num">3</div>
							<div>
								<h3>Follow the instructions</h3>
								<p>Your remote may show you some additional setup steps. Follow them to complete the connection.</p>
							</div>
						</div>
					</div>

					<div class="webapp-empty-help card">
						<h3>Need help joining?</h3>
						<p>If scanning fails, refresh this page and try the QR code again.</p>
						<a href="/contact.html">Contact support</a>
					</div>

					<RemoteTroubleshooting />
				</div>
			</div>
		</section>
	);
};

export default WebAppSection;
