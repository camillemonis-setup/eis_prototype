'use client'

import { Card, CardContent, CardDashboard } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Truck } from "lucide-react"
import { useState } from "react"

export function CollapsibleCard() {
    const [open, setOpen] = useState(false)

    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <CardDashboard className="relative cursor-pointer hover:bg-accent">
                <CollapsibleTrigger asChild>
                    <CardContent className="p-4 py-5 space-y-2 transition-colors">
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Shipping Status</span>
                            <Truck size={35} />
                        </div>
                        <div className="text-xl font-bold">5 Updates</div>
                    </CardContent>
                </CollapsibleTrigger>

                <CollapsibleContent
                    className="absolute top-full left-0 w-full z-20 bg-background shadow-lg rounded-xl p-4"
                >
                    {/* Dropdown content */}
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <div>
                            <p className="font-medium text-foreground">In Transit: Package XIFJSOUG</p>
                            <p className="text-xs">1 hour ago</p>
                        </div>
                        <div>
                            <p className="font-medium text-foreground">Arrived: Package SORIGHYSNF</p>
                            <p className="text-xs">1 hour ago</p>
                        </div>
                        <div>
                            <p className="font-medium text-foreground">Order Placed: Package SDFORUN</p>
                            <p className="text-xs">2 hours ago</p>
                        </div>
                    </div>
                </CollapsibleContent>
            </CardDashboard>
        </Collapsible>

    )
}
