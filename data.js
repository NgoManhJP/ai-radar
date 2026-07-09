// AI Radar — nguồn dữ liệu duy nhất.
// File này được cập nhật bởi skill /radar (hoặc sửa tay).
// Quy ước:
//   category: "claude-plugin" | "claude-skill" | "mcp" | "repo" | "tool" | "article" | "course" | "model"
//   status:   "new" (mới lưu, chưa thử) | "trying" (đang vọc) | "using" (dùng hằng ngày) | "archived" (bỏ / hết quan tâm)
const RADAR_ITEMS = [
  {
    id: "lam-chu-vibe-coding-claude-code",
    name: "Làm chủ AI Vibe Coding với Claude Code: Con người là \"Cửa ải Cuối\"",
    url: "articles/lam-chu-vibe-coding-claude-code.html",
    category: "article",
    tags: ["vibe-coding", "claude-code", "code-review", "governance", "system-design"],
    summary:
      "Báo cáo tổng hợp dài, trích dẫn cụ thể (Anthropic, Veracode, CodeRabbit, GitClear, Karpathy). Luận điểm chính: con người ra ~70% quyết định lập kế hoạch nhưng chỉ ~20% quyết định thực thi (dữ liệu Anthropic, 400.000 phiên) — vai trò của bạn là 'gatekeeper' chốt kế hoạch/kiến trúc/review. Code AI có rủi ro đo được (Veracode: 45% fail OWASP; CodeRabbit: PR có AI nhiều vấn đề hơn ~1,7x). Đề xuất quy trình Explore→Plan→Code→Commit, CLAUDE.md/ADR, human-in-the-loop gates nhiều lớp, và lộ trình upskill từ 'vibe coding' lên 'agentic engineering' (Karpathy).",
    whyCare:
      "Khác các bài hô hào chung, bài này có số liệu cụ thể để tự đối chiếu (checklist review 10 điểm, ngưỡng benchmark như 'review PR-AI ≈ PR-người → đang rubber-stamp'). Đáng đọc cùng lúc với việc dùng Engram/Claude Code hằng ngày — cùng chủ đề 'con người vẫn phải là cửa ải cuối', áp dụng được ngay vào CLAUDE.md và quy trình review của ai-study.",
    source: "Bài tổng hợp nghiên cứu share trên group, 2026-07-07 (dạng deep-research report, không rõ tác giả/công cụ tạo gốc)",
    addedAt: "2026-07-07",
    status: "new",
    notes: "Toàn văn được lưu trong radar, giữ nguyên nội dung gốc kèm mục lục điều hướng (bài dài, có TL;DR + 6 key findings + 4 phần chi tiết + lộ trình 4 giai đoạn + caveats).",
    article: "articles/lam-chu-vibe-coding-claude-code.html",
    i18n: {
      ja: {
        name: "Claude Codeで「AI Vibeコーディング」を使いこなす：人間が最後の関門",
        summary:
          "Anthropic・Veracode・CodeRabbit・GitClear・Karpathyを具体的に引用した長文レポート。核心：人間は計画判断の約70%を担うが実行判断はわずか約20%（Anthropicデータ、40万セッション分析）——あなたの役割は計画・アーキテクチャ・レビューを最終確認する『ゲートキーパー』。AI生成コードには測定可能なリスクがある（Veracode: OWASP失敗45%、CodeRabbit: AI関与PRは問題数が約1.7倍）。Explore→Plan→Code→Commitのワークフロー、CLAUDE.md/ADR、多層のhuman-in-the-loopゲート、そして「vibeコーディング」から「agentic engineering」（Karpathy）へのスキルアップ計画を提示。",
        whyCare:
          "抽象的な啓蒙記事と違い、自分の状況と照らし合わせられる具体的な基準がある（10項目のレビューチェックリスト、『AI-PRの確認時間が人間のPRと同じ→rubber-stampしている』などの閾値）。Engram/Claude Codeを日常的に使う今こそ読む価値がある——『人間が最後の関門であるべき』という同じテーマを、CLAUDE.mdやレビュー運用に直接反映できる。",
        notes: "全文をRadar内に保存（原文のまま＋ナビ用目次付き、長文のため）。本文はベトナム語。"
      }
    },
    lastCheckedAt: null
  },
  {
    id: "3-ky-nang-thoi-vibe-code",
    name: "3 kỹ năng sống sót thời vibe code",
    url: "articles/3-ky-nang-thoi-vibe-code.html",
    category: "article",
    tags: ["vibe-coding", "mindset", "career", "system-design"],
    summary:
      "Phần lớn sản phẩm vibe code là 'rác kỹ thuật' kiểu mới: chạy hoàn hảo với 10 user, chết ở 200 vì các quyết định kiến trúc vô hình lúc MVP (polling, binary nhét DB, không cache, không rate-limit). 3 kỹ năng nên tự rèn: viết spec thay vì prompt, bản đồ hạ tầng trong đầu (hỏi 'tại sao' thay vì 'thế nào'), và thấu hiểu con người.",
    whyCare:
      "Điểm sắc nhất: AI chỉ trả lời câu hỏi bạn biết mà hỏi — khoảng trống chết người là không biết câu hỏi đó tồn tại. Cả 3 kỹ năng đều là 'kỹ năng đặt câu hỏi đúng'. Có lộ trình riêng cho dân non-tech và dân tech.",
    source: "Bài share trên group, 2026-07-06 (không rõ tác giả gốc)",
    addedAt: "2026-07-06",
    status: "new",
    notes: "Toàn văn được lưu trong radar, giữ nguyên nội dung gốc + ô tóm tắt.",
    article: "articles/3-ky-nang-thoi-vibe-code.html",
    i18n: {
      ja: {
        name: "バイブコーディング時代を生き抜く3つのスキル",
        summary:
          "バイブコーディング製品の多くは新型の「技術的ゴミ」：ユーザー10人では完璧に動くが、MVP段階では見えないアーキテクチャ判断（ポーリング、DBへのバイナリ保存、キャッシュなし、レートリミットなし）のせいで200人で崩壊する。鍛えるべき3つのスキル：プロンプトではなくスペックを書く、頭の中にインフラ地図を持つ（「どうやって」ではなく「なぜ」を問う）、人間を深く理解する。",
        whyCare:
          "最も鋭い指摘：AIは「あなたが知っていて聞ける質問」にしか答えない——致命的な穴は、その質問の存在すら知らないこと。3つのスキルはいずれも「正しい問いを立てるスキル」。非エンジニア／エンジニア別のロードマップ付き。",
        notes: "全文をRadar内に保存（原文のまま＋要約ボックス付き）。本文はベトナム語。"
      }
    },
    lastCheckedAt: null
  },
  {
    id: "engram",
    name: "Engram",
    repo: "https://github.com/nagisanzenin/engram",
    category: "claude-plugin",
    tags: ["learning", "spaced-repetition", "fsrs", "claude-code"],
    summary:
      "Plugin học tập cho Claude Code với 3 lệnh /learn, /review, /coach. Dựa trên khoa học học tập đã kiểm chứng: retrieval practice (bắt tự nhớ ra), spaced repetition dùng thuật toán FSRS (như Anki bản mới), hỏi trước giảng sau, map kiến thức kiểu first-principles, sinh trang HTML tương tác cho concept khó.",
    whyCare:
      "Điểm hay nhất: gia sư KHÔNG được tự chấm bài — có agent giám khảo riêng chấm mù (chỉ xem đáp án chuẩn + câu trả lời, không xem buổi học), chống ảo tưởng tiến bộ. Data là JSON local, không gửi đi đâu. Giải đúng bài toán 'AI code nhanh hơn tốc độ mình hiểu code'.",
    install: "claude plugin marketplace add nagisanzenin/engram\nclaude plugin install engram@engram",
    requirements: "Chỉ cần python3, không cần pip install. MIT, free.",
    source: "Bài share trên group (voz-style), 2026-07-06",
    addedAt: "2026-07-06",
    status: "trying",
    notes: "2026-07-06: Đã đọc 100% repo và đánh giá chi tiết — kết luận ĐÁNG THỬ CÓ KIỂM SOÁT (xem trang đánh giá). Cùng ngày: đã cài v0.3.0 trên Windows (fix python3 stub bằng shim C:\\Python314\\python3.exe), selftest 63/63 PASS, doctor OK. Bắt đầu giai đoạn thử 2 tuần.",
    review: "reviews/engram.html",
    i18n: {
      ja: {
        summary:
          "Claude Code用の学習プラグイン。/learn・/review・/coachの3コマンドのみ。検証済みの学習科学に基づく：想起練習（retrieval practice）、FSRSアルゴリズムによる間隔反復（新しいAnkiと同じ）、「先に問い、後に教える」方式、第一原理ベースの知識マップ、難所概念にはインタラクティブHTMLを自動生成。",
        whyCare:
          "最大の見どころ：チューター自身は採点禁止——独立した審査エージェントがブラインド採点（模範解答と回答のみ参照、授業は見ない）し、進歩の錯覚を防ぐ。データはローカルJSONのみで外部送信なし。「AIがコードを書く速度に理解が追いつかない」問題への正面からの答え。",
        notes:
          "2026-07-06: リポジトリを100%読了し詳細評価済み——結論は「管理された試用に値する」（評価ページ・ベトナム語参照）。同日: Windowsにv0.3.0をインストール（python3スタブをシムで解決）、selftest 63/63 PASS。2週間の試用開始。"
      }
    },
    lastCheckedAt: "2026-07-06"
  }
];
