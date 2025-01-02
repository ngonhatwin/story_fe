"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { Label } from "@radix-ui/react-label";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

export default function Searching() {

    const [searchString, setSearchString] = useState('');
    return <div className="flex items-center relative">
        <Label htmlFor="searchBox" className="absolute left-2">
            Tìm kiếm
        </Label>
        <Input
            className="pl-20"
            id="searchBox"
            value={searchString}
            onChange={e => setSearchString(e.target.value)} />
        <Button variant="ghost" className="absolute right-0">
            <Search />
        </Button>

    </div>
}