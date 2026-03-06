import './AboutPage.css';

const sections = [
  {
    title: "What's the story behind this?",
    content:
    `I used to *love* playing console games with my family when I was a boy! Playing games like baseball, tennis, bowling, swordplay, magic games, role-playing games, and so many more. But then... our console died. We could no longer insert discs, and even more unfortunately, the manufacturer stopped supporting it. We couldn't find a replacement, so eventually we just gave up on playing those games together.
      
    Years later, I discovered something called the Dolphin Emulator which allows you to play those games on your PC! I was so excited and helped my family set it up! You could even pair your old console controllers to your PC. The Dolphin Emulator is amazing, but it does have quite a learning curve. With so many advanced options, it wasn't something my mom could power on without my help. Nevertheless, it was still fun to play again, though it never really caught on with my family.
      
    Fast forward another year, I moved off to college and my family's console remotes stayed with them. I made lots of friends and wanted to share these games with them, but we couldn't play together without the controllers. I tried to find replacements, but second-hand controllers were expensive and unreliable.

    That's when it hit me: if the console can be emulated on a PC, why not use the phone you already have as the controller?

    And that's how BeckerBox was born!`,
  },
  {
    title: 'What is BeckerBox?',
    content:
    `BeckerBox is software you download on your PC to play those console games that you used to love, but with your phone as a controller! BeckerBox wraps around the Dolphin Emulator, allowing you access to the same features, but with a **much** easier setup and controller pairing experience. It also provides a more intuitive controller layout and configuration, so you can get up and running with your friends in no time!
    
    Put simply: BeckerBox handles the controller experience — you bring your PC and the games.`,
  },
  {
    title: 'What is the goal of BeckerBox?',
    content:
    `BeckerBox is designed to make it dead-simple for anyone to play classic motion-control games together using only a PC and a phone. Our focus is local multiplayer, family game nights, and party play: we want to make setup and play accessible for non-technical people while remaining flexible for power users who want to tweak advanced settings.`,
  },
  {
    title: 'What can I play on?',
    content:
    `BeckerBox currently runs on Windows PCs. The phone-side controller works in any modern browser on basically all smartphones and tablets. You don't need Bluetooth on the PC — phones connect over the local network to your PC.`,
  },
  {
    title: 'What games work with BeckerBox?',
    content:
    `BeckerBox works with motion-control titles that are compatible with the Dolphin Emulator. That includes many party, sports, and motion-focused games. Examples include popular party and motion titles (e.g., kart racers, party mini-game collections, sports compilations). Click <a href="/party-games.html" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">here</a> for a list of some that work great!. BeckerBox does not include game files, and users must only use game copies they legally own.

    If you have a specific title in mind, contact us and we'll let you know whether it's a good fit.`,
  },
  {
    title: 'Legal note',
    content:
    `BeckerBox provides controller and setup software only. We do not include games, console firmware, or decryption keys. BeckerBox prompts to launch the emulator's built-in installer tools to help you install system software on your own device, but BeckerBox does not provide or download those files for you. I'm not a lawyer — if you need a definitive legal opinion for your situation, please consult an IP/technology attorney. Our design choices are intended to reduce legal risk by placing responsibility for game and system files with the user.`,
  },
];

const AboutPage = () => {
    const formatContent = (content) => {
      return content.replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\*(.*?)\*/g, '<i>$1</i>')
        .replace(/__(.*?)__/g, '<u>$1</u>')
        .replace('Dolphin Emulator', '<a href="https://dolphin-emu.org" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">Dolphin Emulator</a>');
    };
  return (
    <>
      <section class="about-page-hero section slim-bottom">
        <div class="container">
          <p class="about-page-kicker">About BeckerBox</p>
          <h1>Everything you need to know before you play.</h1>
          <p class="lead">
            Quick answers about what BeckerBox is, what it aims to do, and how to use it responsibly.
          </p>
        </div>
      </section>

      <section class="section slim-top about-page-sections">
        <div class="container">
          <div class="about-page-content">
            {sections.map((item) => (
              <article class="about-page-item">
                <h2>{item.title}</h2>
                <p innerHTML={formatContent(item.content)} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
