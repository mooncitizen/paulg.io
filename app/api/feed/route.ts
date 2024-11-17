import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

const fakePost = () => {
    return {
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(5),
        excerpt: faker.lorem.paragraph(),
        author: {
          name: faker.person.fullName(),
          avatar: faker.image.avatar()
        },
        date: faker.date.recent().toISOString(),
        readTime: faker.number.int({ min: 3, max: 15 }),
        tags: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () => 
          faker.helpers.arrayElement(['Tech', 'Design', 'Development', 'AI', 'Web', 'Mobile'])
        ),
        imageUrl: faker.image.url({ width: 1200, height: 630 })
      };
}

const fakeTweet = () => {
    const hasImages = faker.datatype.boolean({ probability: 0.3 }); // 30% chance of having images

    return {
        id: faker.string.uuid(),
        content: faker.lorem.paragraph({ min: 1, max: 4 }),
        author: {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            username: faker.internet.userName().toLowerCase(),
            avatar: faker.image.avatar(),
            verified: faker.datatype.boolean({ probability: 0.2 }), // 20% chance of being verified
        },
        stats: {
            likes: faker.number.int({ min: 0, max: 100000 }),
            retweets: faker.number.int({ min: 0, max: 50000 }),
            replies: faker.number.int({ min: 0, max: 10000 }),
            views: faker.number.int({ min: 1000, max: 1000000 }),
        },
        createdAt: faker.date.recent({ days: 7 }).toISOString(),
        ...(hasImages && {
            attachments: {
                images: Array.from(
          { length: faker.number.int({ min: 1, max: 4 }) },
          () => faker.image.url({ width: 1200, height: 675 })
        )
      }
    })
  };
}

const fakeTweetFeed = (amount: number) => {
    return Array.from({ length: amount }, () => fakeTweet());
}

const fakeFeed = (amount: number) => {
    return Array.from({ length: amount }, () => fakePost());
}

export async function GET(request: Request) {
  console.log(request.url)
  return NextResponse.json({ 
    feed: fakeFeed(10),
    tweets: fakeTweetFeed(10)
  });
}