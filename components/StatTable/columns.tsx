"use client"

import { ColumnDef } from "@tanstack/react-table";

export type UserStats = {
    teamName: string
    userName: string
    gamesPlayed: number
    kills: number
    deaths: number
    assists: number
}

export const columns: ColumnDef<UserStats>[] = [
    {
        header: 'Name',
        columns: [
            {
                accessorKey: 'userName',
            },
            {
                accessorKey: 'teamName',
            },
        ],
    },
    {
        header: 'Game Count',
        columns: [
            {
                accessorKey: 'gamesPlayed',
            },
        ]
    },
    {
        header: 'K/D/A',
        columns: [
            {
                id: "KDA",
                accessorFn: row => {
                    const kda = row.deaths === 0
                    ? row.kills + row.assists
                    : (row.kills + row.assists) / row.deaths;

                    const formattedKDA = new Intl.NumberFormat('en-US', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                    }).format(kda);

                    return formattedKDA;
                },
            },
            {
                accessorKey: "kills",
            },
            {
                accessorKey: "deaths",
            },
            {
                accessorKey: 'assists',
            }
        ]
    }
]