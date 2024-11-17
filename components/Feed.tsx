"use client";

// import { useEffect, useState } from "react";

export default function Feed() {

    // // @ts-expect-error
    // const [feed, setFeed] = useState([]);
    // // @ts-expect-error
    // const [tweets, setTweets] = useState([]);

    // const [combinationFeed, setCombinationFeed] = useState([]);

    // useEffect(() => {
    //     fetch('/api/feed')
    //         .then(res => res.json())
    //         .then(data => {
    //             setFeed(data.feed);
    //             setTweets(data.tweets);

    //             // Combine feed and tweets, sorting by date
    //             const combinedItems = [
    //                 // @ts-ignore
    //                 ...data.feed.map((post: any) => ({
    //                     ...post,
    //                     type: 'post',
    //                     sortDate: new Date(post.date)
    //                 })),
    //                 // @ts-ignore
    //                 ...data.tweets.map((tweet: any) => ({
    //                     ...tweet,
    //                     type: 'tweet',
    //                     sortDate: new Date(tweet.createdAt)
    //                 }))
    //             ].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());

    //             // @ts-ignore
    //             setCombinationFeed(combinedItems);
    //         });
    // }, []);

    // console.log(combinationFeed);

    return (
        <div className="flex gap-4">
            <div className="w-full">All</div>
            <div className="w-full">Latest</div>
        </div>
    )
}