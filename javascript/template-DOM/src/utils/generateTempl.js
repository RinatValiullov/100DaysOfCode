class GenerateTempl {
  constructor(template) {
    this._template = template;
  }

  compile(ctx) {
    const regTemplVariable = /\{\{(.*?)\}\}/g;
    let match = null;
    let result = this._template;

    while ((match = regTemplVariable.exec(this._template))) {
      const varName = match[1].trim();
      if (!varName) {
        return;
      }
      const data = ctx[varName];
      // debugger;
      if (typeof data === "function") {
        window[varName] = data;
        result = result.replace(
          new RegExp(match[0], "gi"),
          `window.${varName}()`
        );
        continue;
      }

      result = result.replace(new RegExp(match[0], "gi"), data);
    }

    return result;
  }
}

export { GenerateTempl };
