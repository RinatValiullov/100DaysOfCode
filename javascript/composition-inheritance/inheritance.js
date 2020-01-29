class Programmer {
  constructor(nickname) {
    this.nickname = nickname;
  }

  canCode() {
    console.log(`${this.nickname} is coding...`);
  }
}

const programmer = new Programmer('programmer');
programmer.canCode();

class Frontend extends Programmer {
  angular() {
    console.log(`${this.nickname} is creating angular app...`);
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.nickname} is programming on NodeJS...`);
  }
}

const frontender = new Frontend('frontender');
frontender.canCode();
frontender.angular();

const backender = new Backend('backender');
backender.canCode();
backender.nodejs();

// Starting get problem with inheritance approach to make Fullstack developer
class Fullstack extends Frontend {
  // we must duplicate methods from Backend class to achieve desired functionality
  nodejs() {
    console.log(`${this.nickname} is programming on NodeJS...`);
  }
}

const fullstack = new Fullstack('fullstack');
fullstack.canCode();
fullstack.nodejs();
fullstack.angular();
