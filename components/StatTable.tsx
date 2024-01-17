"use client"
import { useReactTable, createColumnHelper, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useState } from 'react';

type UserStats = {
    teamName: string
    userName: string
    gamesPlayed: number
    kills: number
    deaths: number
    assists: number
}

const columnHelper = createColumnHelper<UserStats>();


const defaultColumns: ColumnDef<UserStats>[] = [
    {
        header: 'Name',
        footer: props => props.column.id,
        columns: [
            {
                accessorKey: 'userName',
                header: () => <span>Player</span>,
                footer: props => props.column.id
            },
            {
                accessorKey: 'teamName',
                header: () => <span>Team</span>,
                footer: props => props.column.id
            },
        ],
    },

    {
        header: 'Game Count',
        footer: props => props.column.id,
        columns: [
            {
                accessorKey: 'gamesPlayed',
                footer: props=> props.column.id
            },
        ]
    },

    columnHelper.group({
        header: 'K/D/A',
        footer: props => props.column.id,
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
                footer: props => props.column.id
            },
            {
                accessorKey: "deaths",
                footer: props=> props.column.id
            },
            {
                accessorKey: 'assists',
                footer: props=> props.column.id
            }
        ]
    })
]

export default function StatTable() {
    const mockData: UserStats[] = [
        {"userName": "ruuffian", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 3, "deaths": 2, "assists": 4},
        {"userName": "CloudTurtle", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 40, "deaths": 0, "assists": 2},
        {"userName": "Buggleberry Finn", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 5, "deaths": 12, "assists": 0},
        {"userName": "Praetorian", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 0, "deaths": 0, "assists": 45},
    ]


    const [data] = useState<UserStats[]>(mockData);

    const [columns] = useState(() => [...defaultColumns]);

    const table = useReactTable({ 
        data, 
        columns, 
        getCoreRowModel: getCoreRowModel(),
        debugAll: true
    });

    return (
        <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                    </tr>
                ))}
            </tbody>

            <tfoot>
            {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                    <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                        )}
                    </th>
                ))}
                </tr>
            ))}
            </tfoot>
        </table>
    )
}