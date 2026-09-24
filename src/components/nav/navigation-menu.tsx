"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Market Structure</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-85">
              <ListItem href="/trading/notes" title="Trade Notes">
                Personal trading notes, setups, execution reviews, and lessons
                learned.
              </ListItem>
              <ListItem
                href="/trading/notes/ssl-reaction"
                title="SSL Reaction"
              >
                SSL 扫荡反应的两种市场反应模型
              </ListItem>
              <ListItem
                href="/trading/notes/long-lower-shadow"
                title="Long Lower Shadow"
              >
                Sweep Reclaim 长下影线与假跌破收回模型
              </ListItem>

              <ListItem
                href="/trading/notes/reversal-patterns"
                title="Reversal Patterns"
              >
                Double Bottom / Inverse Head and Shoulders 双底与头肩底反转模型
              </ListItem>
              <ListItem
                href="/trading/notes/trading-models"
                title="Trading Models"
              >
                Funding Trap / FVG Continuation / Absorption 多指标组合交易模型
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>SMC / ICT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-85">
              <ListItem href="/trading/page" title="SMC / ICT Overview">
                聪明钱与流动性框架：市场结构、订单块与交易确认逻辑
              </ListItem>

              <ListItem href="/trading/liquidity" title="Liquidity">
                BSL / SSL, liquidity sweeps, stop hunts, and reversal logic.
              </ListItem>

              <ListItem href="/trading/bsl" title="BSL Model">
                Buy-side liquidity model and sweep-reclaim setups.
              </ListItem>

              <ListItem href="/trading/fvg-model" title="FVG">
                ICT imbalance zones for liquidity-sweep pullbacks and
                displacement validation.
              </ListItem>

              <ListItem href="/trading/smt" title="SMT">
                Smart Money Technique notes for divergence between correlated
                markets.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Derivatives Flow</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-85">
              <ListItem
                href="/trading/top-trader-long-short-ratio"
                title="Top Trader Long Short Ratio"
              >
                大户多空比
              </ListItem>

              <ListItem href="/trading/oi" title="Open Interest">
                Judge whether price movement is driven by new positions or
                position release.
              </ListItem>

              <ListItem href="/trading/funding-rates" title="Funding Rate">
                Understand market crowding, long/short bias, and liquidation
                risk.
              </ListItem>

              <ListItem href="/trading/delta" title="Delta">
                Analyze aggressive buying and selling pressure behind price
                moves.
              </ListItem>

              <ListItem href="/trading/cvd" title="CVD">
                Cumulative Volume Delta, divergence, and order flow
                confirmation.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-2 hover:bg-muted rounded-sm">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm text-muted-foreground leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
