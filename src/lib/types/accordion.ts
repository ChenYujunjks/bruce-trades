// 1. 定义每个 section 的结构
export interface AccordionSection {
  id: string; // 每个 item 的唯一标识（value）
  title: string; // 标题
  content: React.ReactNode; // 内容支持多段 JSX
}
