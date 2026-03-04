import './AboutPage.css';

const sections = [
  {
    title: "What's the story behind this?",
    content:
    `I used to *love* playing console games with my family when I was a boy! Playing games like baseball, tennis, bowling, swordplay, magic games, role-playing games, and so many more. But then... our console died. We could no longer insert discs, and even more unfortunately, the company that made the console stopped supporting it. We couldn't find a replacement, so eventually we just gave up on playing those games together.
      
    Fast forward a decade or so, when I was 21, I discovered something called the Dolphin Emulator which allows you to play those games on your PC! I was so excited and helped my family set it up! You could even pair your old console controllers to your PC. The dolphin emulator is amazing, but it does have quite a learning curve. With so many options avaiable, it wasn't something my mom could power up without me there. Nevertheless, with that and the controller connection was a little fuzzy over the computer's bluetooth, it was still a great blast from the past.
      
    Fast forward another year, I moved off to college and my family's console remotes stayed with them. I made lots of friends and wanted to share these games with them, but we couldn't play together without the controllers. I tried to find replacements, but since they were discontinued, they were only second-hand and more expensive than I was willing to pay.

    Then I had an idea: if the console is emulated on the PC, couldn't I just use my phone as a controller...?

    And that's how BeckerBox was born!`,
  },
  {
    title: 'What is BeckerBox?',
    content:
    `BeckerBox is software you download on your PC to play those console games that you used to love, but with your phone as a controller! BeckerBox wraps around the Dolphin Emulator, allowing you access to the same features, but with a **much** easier setup and controller pairing experience. It also provides a more intuitive controller layout and configuration, so you can get up and running with your friends in no time!`,
  },
  {
    title: 'What is the goal of BeckerBox?',
    content:
    `BeckerBox is designed to make it easy for anyone to play those classic console games together without needing **ANY** hardware other than a PC and a phone.
    
    It aims to be the most user-friendly way to play those games, with a focus on local multiplayer experiences. It's perfect for game nights, parties, or just hanging out with friends and family. BeckerBox is also designed to be flexible and customizable, so you can tailor the experience to your preferences and setup.`,
  },
  {
    title: 'What can I play on?',
    content:
    `BeckerBox currently only runs on windows computers. You don't need a powerful gaming PC to run BeckerBox, you don't need bluetooth on your computer. You only need a windows computer with an internet connection.
    
    BeckerBox Remote works on ALL devices with a web browser and motion-sensing capabilities (basically all phones released after 2015). So you can use your phone, or even a tablet as a controller!`,
  },
  {
    title: 'What games are there?',
    content:
    `BeckerBox is designed to work with all games that are compatible with the Dolphin Emulator. This includes a wide variety of games across multiple genres, including sports games, party games, action games, and more. Some popular titles that work well with BeckerBox include Mario Kart Wii, Super Smash Bros. Brawl, Wii Sports, and many more! If you have a specific game in mind, feel free to reach out to us and we'll let you know if it's compatible with BeckerBox!
    
    **Note:** It is considered *illegal* to download games that you do not own. BeckerBox does not provide any games, and we do not support piracy.`,
  },
  {
    title: 'Is BeckerBox legal?',
    content:
    `Yes. But this is only because we don't include certain files and/or information on our website or on BeckerBox. You may have noticed that we never mention the name of the console or the games that BeckerBox works with. This is because we don't want to risk any legal issues with the companies that make those consoles and games.
    
    **Let me be very clear:** __I do not own the rights to the console or the games that BeckerBox is compatable with__.
    
    When you purchase BeckerBox, you are paying for the software that I personally made: The ease of use interface, the controller pairing system, and the support and updates that come with it.
    
    Though you are not paying for the console or the games themselves, when installing BeckerBox, you will be walked through the process of installing the necessary console system files directly from nintendo (via the dolphin emulator).
    
    I don't mean to scare you, I hope it doesn't feel that way or sound too complicated. I just want to be transparent about the legalities of BeckerBox. This way, none of us have to worry about any legal/copyright issues down the line.`,
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
