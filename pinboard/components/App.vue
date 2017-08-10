<template>
        <div class="container">
            <div class="columns">
                <div class="column is-centered">
                    <div v-for="link in links" class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                <a class="is-size-5" :href="link.u">{{shortTitle(link.d)}}</a>
                            </p>
                            <a class="card-header-icon">
                                <span class="icon">
                                    <b-dropdown>
                                        <span  slot="trigger">
                                            <b-icon icon="more_vert"></b-icon>
                                        </span>
                                        <b-dropdown-option><a target="_blank" :href="ssnn('twitter', link)">Share on Twitter</a></b-dropdown-option>
                                        <b-dropdown-option><a target="_blank" :href="ssnn('facebook', link)">Share on Facebook</a></b-dropdown-option>
                                    </b-dropdown>
                                </span>
                            </a>
                        </header>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-6">{{link.n}}</p>
                                </div>
                            </div>
                            <div class="content">
                                <p class="subtitle is-6">Pin saved by: {{link.a}} on {{link.dt}}</p>
                                <p v-if="tags(link.t)">
                                    <span class="has-text-primary" v-for="tag in link.t">#{{tag}} </span> 
                                </p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <p class="card-footer-item">
                            <span>
                                <a :href="link.u">View pin</a>
                            </span>
                            </p>
                        </footer>
                    </div>
                    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
                </div>
            </div>
        </div>
</template>
<script>
import axios from "axios"
import share from "social-share"
import ellipsis from "text-ellipsis"
import InfiniteLoading from "vue-infinite-loading"

export default {
    components: {
        InfiniteLoading
    },
    data(){
        return {
            links: [],
            offset: 0,
            limit: 20
            
        }
    },
    created(){
        this.links = window.pins.slice(this.offset, this.limit - 1)
    },
    methods: {
        tags(tags){
            if ((tags.length > 0) && (tags[0] !== '')) {
                return true
            }
            else return false
        },
        meta(link){
            Metascraper
              .scrapeUrl(link)
              .then((metadata) => {
                console.log(metadata)  
              })
        
        },
        ssnn(network, link) {
            return share(network, {title: link.d, url: link.u})
        },
        shortTitle(text){
            return ellipsis(text, 50)
        },
 onInfinite() {
      setTimeout(() => {
          this.offset = this.offset + this.limit
          this.links = this.links.concat(window.pins.slice(this.offset, this.offset + this.limit -1))
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      }, 1000);
    },
    }
}
</script>
<style>
.card {
    margin-bottom: 20px;
}
</style>
