import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
import { base, heading } from "@/constants";
import { subheading } from "@/constants/fonts";
import { generateMetadata } from "@/utils/meta-data";

import "./globals.css";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
          base.variable,
          heading.variable,
          subheading.variable
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        {children}
      </body>
    </html>
  );
}
