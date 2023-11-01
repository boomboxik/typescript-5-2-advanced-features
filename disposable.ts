(Symbol.dispose as any) ??= Symbol("Symbol.dispose");

class Log implements Disposable {
  #text: string;

  constructor(text: string) {
    this.#text = text;
  }

  [Symbol.dispose]() {
    console.log(`Disposing ${this.#text}`);
  }
}

const someCondition = true;

const doWork = () => {
  // some code
  using log = new Log("123");

  if (someCondition) {
    return;
  }
  // some other code
};

doWork();