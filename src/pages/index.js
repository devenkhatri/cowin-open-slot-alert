import React from 'react';
import FeedItems from 'gatsby-theme-chronoblog/src/components/feed-items';
import FeedSearch from 'gatsby-theme-chronoblog/src/components/feed-search';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
import Tags from 'gatsby-theme-chronoblog/src/components/tags';
import AuthorBanner from 'gatsby-theme-chronoblog/src/components/author-banner';
import OpenSlots from '../components/OpenSlots'

export default () => {
    
    return (
        <Layout>
            {/* <AuthorBanner /> */}            
            <OpenSlots />
            {/* <FeedSearch />
            <Tags />
            <FeedItems /> */}
        </Layout>
    );
};
