<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-5-desktop">
                <b-tabs position="is-centered">
                    <b-tab-item label="Popular">
                        <div style="padding:5px;">
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
                                            <p class="title is-5">{{link.n}}</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <p class="subtitle is-6">Updated: {{beautyDate(link.dt)}}</p>
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
                                    <p v-if="notSaved(link)" @click="add(link)" class="card-footer-item">
                                        <i class="material-icons has-text-primary">favorite_border</i>
                                    </p>
                                    <p v-else @click="remove(link)" class="card-footer-item">
                                        <i class="material-icons has-text-primary">favorite</i>
                                    </p>
                                </footer>
                            </div>
                            <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
                        </div>
                    </b-tab-item>

                    <b-tab-item icon="favorite">
                        <div style="padding:5px;">
                            <div v-if="savedLinks.length > 0" v-for="link in savedLinks" class="card">
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
                                            <p class="title is-5">{{link.n}}</p>
                                        </div>
                                    </div>
                                    <div class="content">
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
                                    <p @click="add(link)" v-if="notSaved(link)"  class="card-footer-item">
                                        <i class="material-icons has-text-primary">favorite_border</i>
                                    </p>
                                    <p @click="remove(link)" v-else class="card-footer-item">
                                        <i class="material-icons has-text-primary">favorite</i>
                                    </p>
                                </footer>
                            </div>
                            <div v-if="savedLinks.length === 0" class="has-text-centered">
                                Add some favorites, and they will be shown here.
                            </div>
                        </div>
                    </b-tab-item>
                </b-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import share from "social-share"
import ellipsis from "text-ellipsis"
import InfiniteLoading from "vue-infinite-loading"
import _ from 'lodash'
import prettydate from 'pretty-date'

// localStorage persistence
var STORAGE_KEY = 'pinboard'
var linkStorage = {
  fetch: function () {
    var links = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    //links.forEach(function (link, index) {
    //  link.id = index
    //})
    //linkStorage.uid = links.length
    return links
  },
  save: function (links) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links))
  }
}

export default {
    components: {
        InfiniteLoading
    },
    data(){
        return {
            links: [],
            offset: 0,
            limit: 5,
            savedLinks: linkStorage.fetch()
        }
    },
    created(){
        this.links = window.pins.slice(this.offset, this.limit - 1)
    },
    methods: {
        beautyDate(date){
            return prettydate.format(new Date(date))
        },
        notSaved(link){
            var found = _.find(this.savedLinks, {'u': link.u})
            if (found === undefined) return true
            else return false
        },
        add(link){
            this.savedLinks.push(link)
        },
        remove(link){
            this.savedLinks.splice(this.savedLinks.indexOf(link), 1)
        },
        tags(tags){
            if ((tags.length > 0) && (tags[0] !== '')) {
                return true
            }
            else return false
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
    },
    watch: {
        savedLinks: {
              handler: function (savedLinks) {
                linkStorage.save(savedLinks)
              },
              deep: true
            }
    }
}
</script>
<style>
.card {
    margin-bottom: 20px;
}
</style>
