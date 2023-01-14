const helpers = {
  cutText(text: { split: (arg0: string) => { (): any; new(): any; length: number; }; substring: (arg0: number, arg1: any) => any; }, length: any) {
    if (text.split(" ").length > 1) {
      const string = text.substring(0, length);
      const splitText = string.split(" ");
      splitText.pop();
      return splitText.join(" ") + "...";
    } else {
      return text;
    }
  },
  capitalizeFirstLetter(string: string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return "";
    }
  },
  onlyNumber(string: string) {
    if (string) {
      return string.replace(/\D/g, "");
    } else {
      return "";
    }
  },
  formatCurrency(number: { toString: () => string; }) {
    if (number) {
      const formattedNumber = number.toString().replace(/\D/g, "");
      const rest = formattedNumber.length % 3;
      let currency = formattedNumber.substr(0, rest);
      const thousand = formattedNumber.substr(rest).match(/\d{3}/g);
      let separator;

      if (thousand) {
        separator = rest ? "." : "";
        currency += separator + thousand.join(".");
      }

      return "Rp " + currency;
    } else {
      return 0;
    }
  },
  formatNumber(number: { toString: () => string; }) {
    return number
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      : "";
  },
  toRaw(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  },
  randomNumbers(from: number, to: number, length: number) {
    const numbers = [0];
    for (let i = 1; i < length; i++) {
      numbers.push(Math.ceil(Math.random() * (from - to) + to));
    }

    return numbers;
  },
  downloadFile(res: { data: any; }, filename: any, extension: any) {
    console.log("download File")
    const url = window.URL.createObjectURL(new Blob([res.data || res]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${filename}.${extension}`);
    document.body.appendChild(link);
    link.click();
  },

  urlHref(url: string) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
  },
  textSlice(text: string, length: number) {
    if (text.length > length) {
      return text.slice(0, length) + "...";
    } else {
      return text;
    }
  },
  randomColorHex() {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  },
  convertToBase64(event: { target: { files: any[]; }; }, callback: (arg0: string | ArrayBuffer | null) => void) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      callback(reader.result);
    };

    reader.readAsDataURL(file);
  },
};

export default helpers;
