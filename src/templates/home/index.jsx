import { Component } from "react";

import "./styles.css";

import { LoadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from '../../components/buttonPosts';
import { ButtonClear } from "../../components/buttonClear";
import { InputSearchValue } from "../../components/inputSearch";

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
        searchValue: ''
    };

    async componentDidMount() {
        await this.loadPosts()
    }

    loadPosts = async () => {
        const { page, postsPerPage } = this.state

        const postsAndPhotos = await LoadPosts()
        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos
        });
    }

    handleChange = (e) => {
        const { value } = e.target
        this.setState({ searchValue: value })
    }

    loadMorePosts = () => {
        const { posts, allPosts, page, postsPerPage } = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
        this.setState({ page: nextPage })

    }

    clearPosts = () => {
        const { posts, postsPerPage } = this.state

        if (posts.length > postsPerPage) {
            for (var i = posts.length; i > postsPerPage; i--) {
                posts.pop(i)
            }
            this.setState({ page: 0, filteredPosts: '' })
        }
    }

    render() {
        const { posts, page, postsPerPage, allPosts, searchValue } = this.state
        const filteredPosts = searchValue ? allPosts.filter(post => post.title.toLowerCase().
            includes(searchValue.toLocaleLowerCase())) : posts;

        const noMorePosts = page + postsPerPage >= allPosts.length
        const noClearPosts = postsPerPage >= posts.length

        return (
            <section className="container">
                <InputSearchValue onChange={this.handleChange} />
                <Posts posts={filteredPosts} />
                <div>
                    {!searchValue &&
                        <Button onclick={this.loadMorePosts} disabled={noMorePosts} />
                    }
                    {!noClearPosts && !searchValue &&
                        < ButtonClear onClick={this.clearPosts} />
                    }
                </div>
            </section>
        );
    }
}

