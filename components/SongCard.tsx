import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface SongCardProps {
    cover: string;
    author: string;
    title: string;
    spotifyLink: string;
}

function SongCard({ cover, author, title, spotifyLink }: SongCardProps) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <Image src={cover} alt={`${title} cover`} height={100} width={100} className="w-16 h-16 rounded-md" />
                    <div>
                        <CardTitle>
                            <Link href={spotifyLink} passHref>
                                {title}
                            </Link>
                        </CardTitle>
                        <CardDescription>{author}</CardDescription>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
}

export default SongCard;
