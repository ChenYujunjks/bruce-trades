import Link from "next/link";
import { Inter } from "next/font/google";
import { Provider } from "@/components/api/trpc/Provider";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/nav/themetoggle";
import { NavigationMenuDemo } from "@/components/nav/navigation-menu";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Bruce Chen | Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[--color-background] flex flex-col min-h-screen`}
      >
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <header
              className="
                sticky top-0 z-50
                backdrop-blur  /* 毛玻璃效果 */
                bg-white/80       /* 浅色:80% 不透明白 */
                dark:bg-zinc-900/60   /* 深色:60% 不透明深灰 */
                border-b border-[--color-card-border]
              "
            >
              <div className="container mx-auto p-4 ">
                <div className="flex items-center justify-between w-full">
                  <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-[--color-foreground] hover:text-[--color-brand] transition"
                  >
                    {metadata.title as string}
                  </Link>
                  <NavigationMenuDemo />
                  <ThemeToggle />
                </div>
              </div>
            </header>

            <main className="flex-1 container mx-auto p-6">{children}</main>
            <Toaster />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
