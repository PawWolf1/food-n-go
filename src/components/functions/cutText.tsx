export function cutText(text: string, length: number) {
  if (text.length <= length) return text;
  else
    return (
      text.substr(0, text[length - 1] === " " ? length - 1 : length) + "..."
    );
}
