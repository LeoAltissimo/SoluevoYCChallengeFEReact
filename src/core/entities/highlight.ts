interface IHighlight {
  text?: string,
  image?: string,
  destination?: string,
  needShadow?: boolean,
}

class Highlight {
  text: string | null;
  image: string | null;
  destination: string | null;
  needShadow: boolean | false;

  constructor(h: IHighlight | null) {
    this.text = h?.text ?? "";
    this.image = h?.image ?? "";
    this.destination = h?.destination ?? "/";
    this.needShadow = h?.needShadow ?? false;
  }
}

export type { IHighlight };
export default Highlight;
