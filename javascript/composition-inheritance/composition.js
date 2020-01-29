function FabricOfProgrammers(nick) {
  const programmer = { nick };

  return {
    ...programmer,
    ...canCode(programmer)
  };
}

function canCode({ nick }) {
  return {
    code: () => console.log(`${nick} is coding...`)
  };
}

function canCodeOnAngular({ nick }) {
  return {
    codeAngular: () => console.log(`${nick} is creating angular app...`)
  };
}

function canCodeOnNode({ nick }) {
  return {
    codeNode: () => console.log(`${nick} is coding on NodeJS...`)
  };
}

function canCodeOnReactAndVue({ nick }) {
  return {
    codeReact: () => console.log(`${nick} is creating react app...`),
    codeVue: () => console.log(`${nick} is creating vue app...`)
  };
}

function FabricOfFrontend(nick) {
  const programmer = FabricOfProgrammers(nick);

  return {
    ...programmer,
    ...canCodeOnAngular(programmer),
    ...canCodeOnReactAndVue(programmer)
  };
}

function FabricOfBackend(nick) {
  const programmer = FabricOfProgrammers(nick);

  return {
    ...programmer,
    ...canCodeOnNode(programmer)
  };
}

function FabricOfFullstack(nick) {
  const programmer = FabricOfProgrammers(nick);

  return {
    ...programmer,
    ...canCodeOnNode(programmer),
    ...canCodeOnAngular(programmer),
    ...canCodeOnReactAndVue(programmer)
  };
}

const programmer = FabricOfProgrammers('programmer');
programmer.code();

const frontender = FabricOfFrontend('4rontender');
frontender.code();
frontender.codeAngular();
frontender.codeReact();
frontender.codeVue();

const backender = FabricOfBackend('backender');
backender.code();
backender.codeNode();

const fullstack = FabricOfFullstack('fullstack');
fullstack.code();
fullstack.codeNode();
fullstack.codeAngular();
fullstack.codeReact();
fullstack.codeVue();
