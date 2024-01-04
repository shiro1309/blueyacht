"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ThemeToggleSwitch() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <Switch
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            className="transition-colors duration-200 ease-in-out bg-gray-200 dark:bg-gray-800"
        />
    )
}