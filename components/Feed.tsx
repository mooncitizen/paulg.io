"use client";

import { useEffect, useState } from "react";

export default function Feed() {

    const [feed, setFeed] = useState([]);
    const [tweets, setTweets] = useState([]);

    const [combinationFeed, setCombinationFeed] = useState([]);

    useEffect(() => {
        fetch('/api/feed')
            .then(res => res.json())
            .then(data => {
                setFeed(data.feed);
                setTweets(data.tweets);

                // Combine feed and tweets, sorting by date
                const combinedItems = [
                    ...data.feed.map((post: any) => ({
                        ...post,
                        type: 'post',
                        sortDate: new Date(post.date)
                    })),
                    ...data.tweets.map((tweet: any) => ({
                        ...tweet,
                        type: 'tweet',
                        sortDate: new Date(tweet.createdAt)
                    }))
                ].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());

                // @ts-ignore
                setCombinationFeed(combinedItems);
            });
    }, []);

    console.log(combinationFeed);

    return (
        <div className="flex gap-4">
            <div className="w-full">All</div>
            <div className="w-full">Latest</div>
        </div>
    )

    return (
        <div className="grid grid-cols-3 gap-4">
            {combinationFeed.map((item: any) => (
                <div key={item.id} className="border p-4 rounded-lg">
                    {item.type === 'post' ? (
                        <>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.excerpt}</p>
                            <div className="flex items-center mt-4">
                                <img src={item.author.avatar} alt={item.author.name} className="w-8 h-8 rounded-full" />
                                <div className="ml-2">
                                    <p className="font-medium">{item.author.name}</p>
                                    <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center">
                                <img src={item.author.avatar} alt={item.author.name} className="w-10 h-10 rounded-full" />
                                <div className="ml-3">
                                    <div className="flex items-center">
                                        <p className="font-bold">{item.author.name}</p>
                                        {item.author.verified && (
                                            <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                            </svg>
                                        )}
                                    </div>
                                    <p className="text-gray-500">@{item.author.username}</p>
                                </div>
                            </div>
                            <p className="mt-3">{item.content}</p>
                            {item.attachments?.images && (
                                <div className={`mt-3 grid gap-2 ${
                                    item.attachments.images.length === 1 ? 'grid-cols-1' :
                                    item.attachments.images.length === 2 ? 'grid-cols-2' :
                                    'grid-cols-2'
                                }`}>
                                    {item.attachments.images.map((img: string, i: number) => (
                                        <img key={i} src={img} alt="" className="w-full h-48 object-cover rounded-lg" />
                                    ))}
                                </div>
                            )}
                            <div className="flex justify-between mt-4 text-gray-500 text-sm">
                                <span>{item.stats.replies} replies</span>
                                <span>{item.stats.retweets} retweets</span>
                                <span>{item.stats.likes} likes</span>
                                <span>{item.stats.views} views</span>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}