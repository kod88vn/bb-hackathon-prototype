class HomeController {
  constructor() {
    this.name = 'home';
    this.typistConfig = {
      words: ['Welcome to BB Hackathon Prototype', 'Have a nice day!'],
      id: 'typist',
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 500,
      loop: true,
      postfix: ''
    };
  }
}

export default HomeController;
