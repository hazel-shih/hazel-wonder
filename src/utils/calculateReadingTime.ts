export default function calculateReadingTime(mdxContent: string) {
  // 1. 移除 Markdown 格式和 HTML/MDX 自定義元件
  const plainText = mdxContent
    .replace(/<[^>]+>/g, "") // 移除所有 HTML/MDX 元件標籤
    .replace(/(\*\*|__)(.*?)\1/g, "") // Bold
    .replace(/(\*|_)(.*?)\1/g, "") // Italics
    .replace(/```[\s\S]*?```/g, "") // Code blocks
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Links
    .replace(/(?:\r\n|\r|\n)/g, " ") // Line breaks
    .replace(/!\[.*?\]\(.*?\)/g, "") // Images
    .replace(/#/g, "") // Headings
    .replace(/---/g, "") // 移除 Markdown 水平線
    .replace(/^- /gm, "") // 移除列點 (只匹配每行開頭的 `- `)
    .replace(/^\s+|\s+$/g, ""); // 移除開頭和結尾的多餘空白

  // 2. 判斷是否為中文字符或英文單詞
  const chineseCharacters = plainText.match(/[\u4e00-\u9fff]/g) || [];
  const englishWords = plainText.match(/\b\w+\b/g) || [];

  // 3. 計算字數
  const chineseCharCount = chineseCharacters.length;
  const englishWordCount = englishWords.length;

  // 4. 中文和英文的閱讀速度 (字/分鐘)
  const chineseReadingSpeed = 400; // 中文閱讀速度
  const englishReadingSpeed = 250; // 英文閱讀速度

  // 5. 推估閱讀時間 (分鐘)
  const chineseReadingTime = chineseCharCount / chineseReadingSpeed;
  const englishReadingTime = englishWordCount / englishReadingSpeed;

  // 6. 總閱讀時間
  const totalReadingTime = chineseReadingTime + englishReadingTime;

  // 回傳分鐘，四捨五入到最接近的整數
  return Math.ceil(totalReadingTime);
}
