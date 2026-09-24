// app/check-nvidia-filter/page.tsx  (或 pages/check-nvidia-filter.tsx)
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Settings,
  Gamepad2,
  Filter,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Monitor,
} from "lucide-react";

export default function NvidiaFilterGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            NVIDIA App
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            如何检查 NVIDIA 游戏滤镜是否开启？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            游戏滤镜会实时处理画面，可能影响 CS 的帧数。
            下面教你用最简单的方法确认它是否开启，并了解它和“覆盖层”的区别。
          </p>
        </section>

        {/* 核心步骤 */}
        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-brand" />
              核心步骤：在 NVIDIA App 设置中检查
            </CardTitle>
            <CardDescription>
              最准确的方法是直接查看 NVIDIA App 的设置。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>打开 NVIDIA App</strong>：在电脑右下角任务栏找到 NVIDIA
                图标，右键点击并选择 “NVIDIA App” 打开；或者直接搜索 “NVIDIA
                App” 打开。
              </li>
              <li>
                <strong>进入“设置”</strong>：在 App 窗口左侧，点击
                <strong> “设置”</strong>（齿轮图标）。
              </li>
              <li>
                <strong>找到“功能”选项</strong>：在设置页面中，找到并点击
                <strong> “功能”</strong> 选项卡。
              </li>
              <li>
                <strong>查看“游戏滤镜和照片模式”</strong>：在“功能”页面下，找到
                <strong> “信息浮窗”</strong>（或“覆盖”/“Overlay”）部分，你会看到
                <strong> “游戏滤镜和照片模式”</strong> 的开关。
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500 shrink-0" />
                    <span>
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded">
                        ✅ 如果开关显示为“关”
                      </span>
                      ：说明游戏滤镜已关闭，不会影响 CS 的帧数。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 text-red-500 shrink-0" />
                    <span>
                      <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded">
                        ❌ 如果开关显示为“开”
                      </span>
                      ：说明游戏滤镜已开启，这可能会影响性能。建议
                      <strong>点击开关将其关闭</strong>。
                    </span>
                  </li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* 补充说明 + 覆盖层 vs 滤镜对比 */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-card-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-chart-3" />
                补充说明
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                <strong>版本差异</strong>：较新版本的 NVIDIA App（如 11.0.1
                及以上）中，游戏滤镜功能
                <strong>默认是关闭的</strong>。如果你的 App
                版本较旧，可能需要手动关闭。
              </p>
              <p>
                <strong>重启游戏</strong>：更改设置后，建议
                <strong>重启 CS 游戏</strong>，以确保更改生效。
              </p>
              <p>
                <strong>通过游戏内覆盖层</strong>：在游戏中按{" "}
                <kbd className="px-1 py-0.5 bg-muted rounded">Alt+Z</kbd>{" "}
                打开覆盖层，点击左侧的“游戏滤镜”图标，如果里面没有任何已启用的滤镜方案，也说明该功能未在使用中。但这不如直接在设置里查看开关状态来得准确。
              </p>
            </CardContent>
          </Card>

          <Card className="border-brand/20 bg-brand/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand">
                <Monitor className="h-5 w-5" />
                覆盖层 vs 游戏滤镜
              </CardTitle>
              <CardDescription>两个容易混淆的概念</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-muted bg-background p-3">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Gamepad2 className="h-4 w-4" /> 游戏内覆盖层
                </h3>
                <p className="text-sm text-muted-foreground">
                  按 <kbd className="px-1 py-0.5 bg-muted rounded">Alt+Z</kbd>{" "}
                  弹出的操作面板，用来录制、截图、监控性能。
                  <br />
                  <span className="text-green-600">
                    ✅ 性能影响极小（几乎为 0）
                  </span>
                </p>
              </div>
              <div className="rounded-lg border border-muted bg-background p-3">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Filter className="h-4 w-4" /> 游戏滤镜
                </h3>
                <p className="text-sm text-muted-foreground">
                  位于覆盖层内部，对画面实时调色、锐化等后处理。
                  <br />
                  <span className="text-red-600">
                    ❌ 可能造成 5%~15% 的帧数下降
                  </span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>结论</strong>
                ：放心保留覆盖层（方便录制），但务必关闭滤镜开关。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 重要提醒 */}
        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              重要提醒
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              正如我们之前讨论的，这个“游戏滤镜”功能是影响 CS
              帧数的关键因素之一。
              关闭它可以有效避免不必要的性能损失。如果你追求极致的竞技流畅度，
              请务必确认该功能处于关闭状态。
            </p>
          </CardContent>
        </Card>

        {/* 底部总结（可选） */}
        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <CheckCircle className="h-5 w-5" />
              一句话总结
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-8">
              NVIDIA App 的“游戏滤镜”开关是影响 CS 帧数的“隐形杀手”，
              <span className="font-medium text-brand">
                只需在设置中关闭它，就能在不牺牲录制功能的前提下恢复流畅度。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
