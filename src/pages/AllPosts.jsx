import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import Loader from "../components/Loader";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (() => {
            try {
                setLoading(true);
                appwriteService.getPosts([]).then((posts) => {
                    if (posts) {
                        setPosts(posts.documents);
                    }
                });
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        })();
    }, []);
    if (loading || posts.length === 0) {
        return <Loader />;
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
