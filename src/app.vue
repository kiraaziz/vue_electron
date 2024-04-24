<script setup>
import { ref } from 'vue';
import { Search, Loader2, Eye } from "lucide-vue-next"
import { ipcRenderer } from 'electron';

const searchText = ref("")
const videoResult = ref([
    {
        "id": "GjTTB6yII4o",
        "title": "Short Change Hero",
        "link": "https://youtu.be/GjTTB6yII4o",
        "thumbnail": "https://i.ytimg.com/vi/GjTTB6yII4o/hqdefault.jpg",
        "channel": {
            "id": "UCYDD7WruLEgEBfjxeor48aw",
            "name": "The Heavy",
            "link": "https://www.youtube.com/channel/UCYDD7WruLEgEBfjxeor48aw",
            "handle": null,
            "verified": true,
            "thumbnail": "https://yt3.ggpht.com/mwYo1J9EL0uzzIhXW1WIYMjuXp1oEZT_UQhkBaloqCxKeSbHZRcCAQfi_MtMYgrLmhps3tWsVg=s0?imgmax=0"
        },
        "description": "Provided to YouTube by Ninja Tune Short Change Hero · The Heavy The House That Dirt Built ℗ Counter Records / +1 Records ...",
        "views": 28827908,
        "uploaded": "",
        "duration": 323,
        "durationString": "5:23"
    },
    {
        "id": "lkvScx3Po8I",
        "title": "The Heavy - Short Change Hero",
        "link": "https://youtu.be/lkvScx3Po8I",
        "thumbnail": "https://i.ytimg.com/vi/lkvScx3Po8I/hqdefault.jpg",
        "channel": {
            "id": "UC5g2uRFlAhGAZ0vFQPE0k3Q",
            "name": "Magloire Lamine",
            "link": "https://www.youtube.com/@MagloireLamine",
            "handle": "@MagloireLamine",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_m_F9We9gXQGdNDuPNfUD4u0WeQvclDLr0b5eRbuUZXpvM=s0?imgmax=0"
        },
        "description": "Ce titre 'Short Change Hero' est utilisé comme bande son du générique de la série britannique ultra réaliste 'Strike Back'",
        "views": 12690551,
        "uploaded": "قبل 10 سنوات",
        "duration": 238,
        "durationString": "3:58"
    },
    {
        "id": "Q_tCCGl_FaM",
        "title": "Short Change Hero",
        "link": "https://youtu.be/Q_tCCGl_FaM",
        "thumbnail": "https://i.ytimg.com/vi/Q_tCCGl_FaM/hqdefault.jpg",
        "channel": {
            "id": "UCYDD7WruLEgEBfjxeor48aw",
            "name": "The Heavy",
            "link": "https://www.youtube.com/channel/UCYDD7WruLEgEBfjxeor48aw",
            "handle": null,
            "verified": true,
            "thumbnail": "https://yt3.ggpht.com/mwYo1J9EL0uzzIhXW1WIYMjuXp1oEZT_UQhkBaloqCxKeSbHZRcCAQfi_MtMYgrLmhps3tWsVg=s0?imgmax=0"
        },
        "description": "Provided to YouTube by Universal Music Group Short Change Hero · The Heavy Strike Back ℗ 2009 Counter Records Released ...",
        "views": 507989,
        "uploaded": "",
        "duration": 321,
        "durationString": "5:21"
    },
    {
        "id": "AxMMFN3Bg_Q",
        "title": "Short Change Hero but you're the only survivor of Operation Red Wings",
        "link": "https://youtu.be/AxMMFN3Bg_Q",
        "thumbnail": "https://i.ytimg.com/vi/AxMMFN3Bg_Q/hqdefault.jpg",
        "channel": {
            "id": "UCgD1reVZdhofDAwVUl1w1FA",
            "name": "HistoryFeels",
            "link": "https://www.youtube.com/@HistoryFeels",
            "handle": "@HistoryFeels",
            "verified": true,
            "thumbnail": "https://yt3.ggpht.com/d5v9mWAv9GJ6B5uocVYK9VvJeM6nPykKHD6Es8F_ZiGRPRmBlAPsacJ-RS_d9jS7PbRwlWAS=s0?imgmax=0"
        },
        "description": "Operation Red Wings was a joint military operation conducted by the United States in the Pech District of Kunar Province, ...",
        "views": 1896909,
        "uploaded": "قبل سنة واحدة",
        "duration": 253,
        "durationString": "4:13"
    },
    {
        "id": "QtKpUy5YDHM",
        "title": "The Heavy - Short Change Hero (Live on KEXP)",
        "link": "https://youtu.be/QtKpUy5YDHM",
        "thumbnail": "https://i.ytimg.com/vi/QtKpUy5YDHM/hqdefault.jpg",
        "channel": {
            "id": "UC3I2GFN_F8WudD_2jUZbojA",
            "name": "KEXP",
            "link": "https://www.youtube.com/@kexp",
            "handle": "@kexp",
            "verified": true,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_kVOEJNtDj0wRy4Rt3T6wJ19gwBdRAmKOqhFYn77QEW8Aw=s0?imgmax=0"
        },
        "description": "KEXP 90.3 Seattle presents The Heavy performing \"Short Change Hero\" live at the Triple Door. Recorded 6/22/2010 ...",
        "views": 589161,
        "uploaded": "قبل 13 سنة",
        "duration": 266,
        "durationString": "4:26"
    },
    {
        "id": "vshDh8OldZE",
        "title": "Rexon - Short Change Hero (Cover) Borderlands 2",
        "link": "https://youtu.be/vshDh8OldZE",
        "thumbnail": "https://i.ytimg.com/vi/vshDh8OldZE/hqdefault.jpg",
        "channel": {
            "id": "UCw4XTEEOZDX_X-NWZBoB-hg",
            "name": "rexonband",
            "link": "https://www.youtube.com/@rexonband",
            "handle": "@rexonband",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_m-QY5G2SbixZFuFbXHF9hRh1BkT80IXRZyWqXHZ9k=s0?imgmax=0"
        },
        "description": "What if the Sirens of Borderlands were singing sirens? Kelly and Pete are both big Borderlands fans; the video idea was born ...",
        "views": 2543638,
        "uploaded": "قبل 11 سنة",
        "duration": 264,
        "durationString": "4:24"
    },
    {
        "id": "nDIkioc7hBQ",
        "title": "The Heavy - Short Change Hero (Lyrics)",
        "link": "https://youtu.be/nDIkioc7hBQ",
        "thumbnail": "https://i.ytimg.com/vi/nDIkioc7hBQ/hqdefault.jpg",
        "channel": {
            "id": "UCY0rAfRNbgpC-St45L1O1wA",
            "name": "booooose",
            "link": "https://www.youtube.com/@booooose",
            "handle": "@booooose",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_kmeSuPsVs0cPCc_-z1vk9dxVxMWki-LkX9Q2Br4z6Xyg=s0?imgmax=0"
        },
        "description": "The Heavy - Short Change Hero ENJOY THIS! ^^ Lyrics: I can't see where you're comin' from But I know just what you're runnin' ...",
        "views": 1082450,
        "uploaded": "قبل 13 سنة",
        "duration": 239,
        "durationString": "3:59"
    },
    {
        "id": "1V9XbBNlCqo",
        "title": "Short Change Hero",
        "link": "https://youtu.be/1V9XbBNlCqo",
        "thumbnail": "https://i.ytimg.com/vi/1V9XbBNlCqo/hqdefault.jpg",
        "channel": {
            "id": "UCYDD7WruLEgEBfjxeor48aw",
            "name": "The Heavy",
            "link": "https://www.youtube.com/channel/UCYDD7WruLEgEBfjxeor48aw",
            "handle": null,
            "verified": true,
            "thumbnail": "https://yt3.ggpht.com/mwYo1J9EL0uzzIhXW1WIYMjuXp1oEZT_UQhkBaloqCxKeSbHZRcCAQfi_MtMYgrLmhps3tWsVg=s0?imgmax=0"
        },
        "description": "Provided to YouTube by Ninja Tune Short Change Hero · The Heavy The House That Dirt Built ℗ Counter Records / +1 Records ...",
        "views": 1466254,
        "uploaded": "",
        "duration": 323,
        "durationString": "5:23"
    },
    {
        "id": "ZfbSmWaLrEM",
        "title": "Short Change Hero - The Heavy - Guitar Cover",
        "link": "https://youtu.be/ZfbSmWaLrEM",
        "thumbnail": "https://i.ytimg.com/vi/ZfbSmWaLrEM/hqdefault.jpg",
        "channel": {
            "id": "UC0OtEzIgQD9ancQcTkzy6Bg",
            "name": "daniel zeigler-Tappy",
            "link": "https://www.youtube.com/@danzigz1",
            "handle": "@danzigz1",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_lnKe1gmshzjuw-p10AY9yQO_XUXKxXSZvUPTckH8xhehU=s0?imgmax=0"
        },
        "description": "acoustic guitar.",
        "views": 62,
        "uploaded": "قبل يومين",
        "duration": 153,
        "durationString": "2:33"
    },
    {
        "id": "cqcTJRuCMwU",
        "title": "Short Change Hero/The Heavy/ lyrics",
        "link": "https://youtu.be/cqcTJRuCMwU",
        "thumbnail": "https://i.ytimg.com/vi/cqcTJRuCMwU/hqdefault.jpg",
        "channel": {
            "id": "UChgq7N73W0C9Erjmxudp0LQ",
            "name": "FaxyS",
            "link": "https://www.youtube.com/@faxys1316",
            "handle": "@faxys1316",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/6FGsjcgJcOksXNv0QYnNEYhJdVSFaFyHz6A1brXg1NHafEEDTiFxTVK3Fl58yN8nvIcG3qKQMsU=s0?imgmax=0"
        },
        "description": "Daumen runter oder hoch :-)",
        "views": 1182085,
        "uploaded": "قبل 9 سنوات",
        "duration": 236,
        "durationString": "3:56"
    },
    {
        "id": "OZiSRgtfedA",
        "title": "Short Change Hero - 1 hour EXTENDED",
        "link": "https://youtu.be/OZiSRgtfedA",
        "thumbnail": "https://i.ytimg.com/vi/OZiSRgtfedA/hqdefault.jpg",
        "channel": {
            "id": "UCx9ilXcwpQionvnEPOQwf4g",
            "name": "Jack (Richie) McKevitt",
            "link": "https://www.youtube.com/@jack.mckevitt",
            "handle": "@jack.mckevitt",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_kejrLxe8xkqkjNKGO47WuS0rtnfRIUMRr4OcNaJMpEHcA=s0?imgmax=0"
        },
        "description": "Richie.",
        "views": 664554,
        "uploaded": "قبل 9 سنوات",
        "duration": 3377,
        "durationString": "56:17"
    },
    {
        "id": "Mnqs3Y0eLTQ",
        "title": "SIN CITY - Short Change Hero - The Heavy",
        "link": "https://youtu.be/Mnqs3Y0eLTQ",
        "thumbnail": "https://i.ytimg.com/vi/Mnqs3Y0eLTQ/hqdefault.jpg",
        "channel": {
            "id": "UCedcgGpebbPRENj0hX6lNNA",
            "name": "ChiefBrodyRules",
            "link": "https://www.youtube.com/@ChiefBrodyRules",
            "handle": "@ChiefBrodyRules",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_le28ghqg-WPr7rtu13FqOX48AOMKvtS_sepzdYjLRfSF4=s0?imgmax=0"
        },
        "description": "SUBSCRIBE! Follow Me on Twitter : @Frankles2001 Like ChiefBrodyRules On FB to get updates and stuff.",
        "views": 627957,
        "uploaded": "قبل 13 سنة",
        "duration": 240,
        "durationString": "4:00"
    },
    {
        "id": "Ak6Zf9DWDiI",
        "title": "Operation Enduring Freedom - Short Change Hero",
        "link": "https://youtu.be/Ak6Zf9DWDiI",
        "thumbnail": "https://i.ytimg.com/vi/Ak6Zf9DWDiI/hqdefault.jpg",
        "channel": {
            "id": "UCoijY17Qqt9tGvBGcMQSrvQ",
            "name": "Sküffed in the head",
            "link": "https://www.youtube.com/@skyffed",
            "handle": "@skyffed",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/Xjs1FZ4i189zeIGjarmE3RolV2EnbkVd9D_LKzaGWAJYqUpjFyz85Ww8My94fm9aX81T0jsfPQ=s0?imgmax=0"
        },
        "description": "hi spent 10 hours on this, Used Videos: https://www.youtube.com/watch?v=tP-ysPz7tJ8 ...",
        "views": 29931,
        "uploaded": "قبل 9 أشهر",
        "duration": 329,
        "durationString": "5:29"
    },
    {
        "id": "bGZqkYM7hQQ",
        "title": "The Heavy - Short Change Hero | Suits 2x16 & 4x07 Music",
        "link": "https://youtu.be/bGZqkYM7hQQ",
        "thumbnail": "https://i.ytimg.com/vi/bGZqkYM7hQQ/hqdefault.jpg",
        "channel": {
            "id": "UClV8b2EhIhIASKw-etzegyw",
            "name": "Suits Music",
            "link": "https://www.youtube.com/@SuitsMusic",
            "handle": "@SuitsMusic",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_laWlNjCVckuWNE5PrCbFfGNU_voq-Ka6lEMzHc-dCyGd8=s0?imgmax=0"
        },
        "description": "",
        "views": 724035,
        "uploaded": "قبل 8 سنوات",
        "duration": 238,
        "durationString": "3:58"
    },
    {
        "id": "zy116aYDYC8",
        "title": "Thomas Shelby | Short Change Hero 4K",
        "link": "https://youtu.be/zy116aYDYC8",
        "thumbnail": "https://i.ytimg.com/vi/zy116aYDYC8/hqdefault.jpg",
        "channel": {
            "id": "UCoXk4TvaYrIpc_usjjNh9Aw",
            "name": "Fabricio Productions",
            "link": "https://www.youtube.com/@FabricioProductions",
            "handle": "@FabricioProductions",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/XtcGyJZfX-wUCG8GNB5sjOvSgg6dkhz1uVxFDRScbcF5ISQxSJml7OQ0RwqRIGpB37HqVJJb=s0?imgmax=0"
        },
        "description": "I ask you to watch the highest quality supported by your devices. If you liked the content, subscribe not to miss new videos. Follow ...",
        "views": 104096,
        "uploaded": "قبل 3 سنوات",
        "duration": 323,
        "durationString": "5:23"
    },
    {
        "id": "rtzLnSk_bw0",
        "title": "The Heavy - Short Change Hero HQ Audio",
        "link": "https://youtu.be/rtzLnSk_bw0",
        "thumbnail": "https://i.ytimg.com/vi/rtzLnSk_bw0/hqdefault.jpg",
        "channel": {
            "id": "UCtiHiJj8sVekQm2IeWOXNrg",
            "name": "Ryan Anderson",
            "link": "https://www.youtube.com/@ryananderson9905",
            "handle": "@ryananderson9905",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_msFrW1W3l6y5bfjUduI3MN8noY_tCi_6lMBJuogTX4bBg=s0?imgmax=0"
        },
        "description": "",
        "views": 427794,
        "uploaded": "قبل 8 سنوات",
        "duration": 241,
        "durationString": "4:01"
    },
    {
        "id": "ELX_XMukn10",
        "title": "Borderlands 2 Music The Heavy - Short Change Hero",
        "link": "https://youtu.be/ELX_XMukn10",
        "thumbnail": "https://i.ytimg.com/vi/ELX_XMukn10/hqdefault.jpg",
        "channel": {
            "id": "UCooP4lQK-LnptUiTPs-9hxw",
            "name": "crazystuff900",
            "link": "https://www.youtube.com/@crazystuff900",
            "handle": "@crazystuff900",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_mHGriklQcytIYjwYq0ozQfQEteUnu-uOth3mvA35M=s0?imgmax=0"
        },
        "description": "hi people enjoy the borderlands 2 music i think the so is amazing please like comment and sub for more game music to come if ...",
        "views": 180541,
        "uploaded": "قبل 11 سنة",
        "duration": 207,
        "durationString": "3:27"
    },
    {
        "id": "5aZVJuyA2Js",
        "title": "The Heavy - Short Change Hero",
        "link": "https://youtu.be/5aZVJuyA2Js",
        "thumbnail": "https://i.ytimg.com/vi/5aZVJuyA2Js/hqdefault.jpg",
        "channel": {
            "id": "UC0kHYUJ4h5Nve0EfB3Shc1A",
            "name": "salacioussound",
            "link": "https://www.youtube.com/@salacioussound",
            "handle": "@salacioussound",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_ngu5Pqzs7CKmk9-t_wB9RMbKbaGGaMpWhMtrq9k-8aHQ=s0?imgmax=0"
        },
        "description": "http://salacioussound.com The Heavy performing their song Short Change Hero from their latest album The House That Dirt Built, ...",
        "views": 729556,
        "uploaded": "قبل 13 سنة",
        "duration": 332,
        "durationString": "5:32"
    },
    {
        "id": "qs8Tk8X2UNs",
        "title": "Cowboy Bebop - Short Change Hero AMV",
        "link": "https://youtu.be/qs8Tk8X2UNs",
        "thumbnail": "https://i.ytimg.com/vi/qs8Tk8X2UNs/hqdefault.jpg",
        "channel": {
            "id": "UCO4Fs12s3Ej4tX-OZRpaFwA",
            "name": "Doug Nguyen",
            "link": "https://www.youtube.com/@dr01dfan",
            "handle": "@dr01dfan",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_mjdROTViS0nN5gHTHGMRCeOp1rh_tAtdDyMuPyNqi20Cs=s0?imgmax=0"
        },
        "description": "All rights belong to their respective owners. Update: I've uploaded an HD version with some tweaks, see it here ...",
        "views": 781814,
        "uploaded": "قبل 11 سنة",
        "duration": 267,
        "durationString": "4:27"
    }
])
const load = ref(false)

const handleSearch = async () => {
    load.value = true

    ipcRenderer.sendSync("getVideos", searchText)

    load.value = false
}

</script>
<template>
    <div class="w-screen h-screen bg-gray-900 p-5 text-white overflow-auto">
        <div class="w-full flex items-center mx-auto max-w-2xl p-3 justify-between gap-3">
            <input placeholder="Search for a video" v-model="searchText"
                class="h-12  px-4 bg-gray-800 focus:border-lime-500 border border-transparent outline-none rounded-md  w-full" />
            <button v-if="!load" @click="handleSearch"
                class="opacity-80 hover:opacity-90 bg-lime-400 h-12 w-16 flex items-center justify-center rounded-md">
                <Search size="20" />
            </button>
            <button v-else disabled
                class="opacity-80 hover:opacity-90 bg-lime-400 h-12 w-16 flex items-center justify-center rounded-md">
                <Loader2 size="20" class="animate-spin" />
            </button>
        </div>
        <ul class="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 mx-auto max-w-5xl">
            <li v-for="video, index in videoResult"
                class="p-2 border overflow-auto rounded-md border-lime-400/50 gap-3 flex hover:shadow-2xl ease-in-out duration-200">
                <img v-bind:src="video.thumbnail" class="rounded-lg w-1/2 object-cover" />
                <div class="p-2 flex-1">
                    <div class="w-max flex items-center justify-center gap-2 mb-3">
                        <img v-bind:src="video.channel.thumbnail" class="h-12 w-12 rounded-full object-cover  " />
                        <h1 class="text-lg font-bold text-lime-400/80">
                            {{ video.channel.name }}
                        </h1>
                    </div>
                    <h1 class="font-bold mb-1">
                        {{ video.title }}
                        <span class="bg-lime-400 text-gray-900 font-medium px-2 mx-1 rounded-full">{{
                            video.durationString }}</span>
                    </h1>
                    <p class="text-sm opacity-60">{{ video.description }}</p>
                    <div class="mt-2 flex items-end justify-start gap-2 ">
                        <Eye size="20" />
                        {{ video.views }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>