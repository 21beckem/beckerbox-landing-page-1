import { For } from 'solid-js';
import './WebAppSection.css';
import RemoteTroubleshooting from './RemoteTroubleshooting';

const WebAppSection = (props) => {
	const sectionClasses = `section ${props.slim ? 'slim' : ''} ${props.slimTTop ? 'slim-top' : ''} ${props.slimBottom ? 'slim-bottom' : ''}`;

    const setupSteps = [
        {
            title: 'Same Wi-Fi connection',
            description: 'Make sure this phone and your computer are on the same Wi-Fi network. Turn off cellular data or VPN on your phone if needed.'
        },
        {
            title: 'Open BeckerBox on your computer',
            description: 'Start or host a game session from the desktop app.'
        },
        {
            title: 'Scan and join',
            description: 'Scan with this phone and your remote controls will load instantly.'
        },
        {
            title: 'Follow the instructions',
            description: 'Your remote may show you some additional setup steps. Follow them to complete the connection.'
        }
    ]

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
					</div>

					<div class="webapp-empty-steps" aria-label="Setup steps">
                        <For each={setupSteps}>
                            {(step, index) => (
                                <div class="card webapp-step">
                                    <div class="webapp-step-num">{index() + 1}</div>
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            )}
                        </For>
					</div>

					<RemoteTroubleshooting />
				</div>
			</div>
		</section>
	);
};

export default WebAppSection;
