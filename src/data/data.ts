import pic_1 from "./pictures/pic_1.jpg";
import pic_2 from "./pictures/pic_2.jpg";
import pic_3 from "./pictures/pic_3.jpg";
import pic_4 from "./pictures/pic_4.jpg";
import pic_5 from "./pictures/pic_5.jpg";
import pic_6 from "./pictures/pic_6.jpg";
import pic_7 from "./pictures/pic_7.jpg";
import pic_8 from "./pictures/pic_8.png";
import pic_9 from "./pictures/pic_9.jpg";

export type dataElem = {
	label: string,
	value: string,
}

export type betterLinks = {
	label: string,
	description: string,
	value: string,
}

export type linkGroup = {
	title: string;
	links: betterLinks[];
}

/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ DELIVER THE GOODS!
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
export const links: linkGroup[] = [
	{
		title: "Web Dev",
		links: [
			{
				label: "GitHub",
				description: "The Source for Code",
				value: "https://github.com/",
			},
			{
				label: "Drupal",
				description: "Drupal.org",
				value: "https://www.drupal.org/",
			},
			{
				label: "GitLab",
				description: "",
				value: "https://gitlab.com/",
			},
			{
				label: "JSFiddle",
				description: "",
				value: "https://jsfiddle.net/",
			},
			{
				label: "Web.dev",
				description: "",
				value: "https://web.dev/",
			},
			{
				label: "Codepen",
				description: "",
				value: "https://codepen.io/pen/",
			},
			{
				label: "Pastebin",
				description: "",
				value: "https://pastebin.com/",
			},
			{
				label: "Stack Overflow",
				description: "",
				value: "https://stackoverflow.com/",
			},
		]
	},
	{
		title: "Security",
		links: [
			{
				label: "GRC Perfect Passwords",
				description: "GRC Ultra High Security Password Generator",
				value: "https://www.grc.com/passwords.htm",
			},
			{
				label: "CISA Free Tools & Services",
				description: "CISA Free Cybersecurity Tools & Services",
				value: "https://www.cisa.gov/free-cybersecurity-services-and-tools",
			},
			{
				label: "CISA Known Exploits Catalog",
				description: "CISA Known Exploited Vulnerabilities Catalog",
				value: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
			},
			{
				label: "/r/cybersecurity",
				description: "",
				value: "https://old.reddit.com/r/cybersecurity/",
			},
			{
				label: "StackEx: Infosec",
				description: "StackExchange: Information Security",
				value: "https://security.stackexchange.com/",
			},
			{
				label: "OSV List",
				description: "Open Source Vulnerabilities List",
				value: "https://osv.dev/list",
			},
			{
				label: "Drupal Security",
				description: "",
				value: "https://www.drupal.org/security",
			},
		]
	},
	{
		title: "SEO",
		links: [
			{
				label: "PageSpeed Insights",
				description: "Google PageSpeed Insights",
				value: "https://pagespeed.web.dev/",
			},
			{
				label: "Analytics",
				description: "Google Analytics",
				value: "https://analytics.google.com/",
			},
			{
				label: "Search Console",
				description: "Google Search Console",
				value: "https://search.google.com/search-console",
			},
			{
				label: "SEMRush",
				description: "",
				value: "https://www.semrush.com/",
			},
			{
				label: "GTMetrix",
				description: "",
				value: "https://gtmetrix.com/",
			},
			{
				label: "Wayback Machine",
				description: "",
				value: "https://archive.org/web/",
			},
			{
				label: "Title Tag Preview Tool",
				description: "Moz Title Tag Preview Tool",
				value: "https://moz.com/learn/seo/title-tag",
			},
			{
				label: "DomainTools WHOIS",
				description: "",
				value: "https://whois.domaintools.com/",
			},

		]
	},
	{
		title: "SEO News",
		links: [
			{
				label: "Search Engine Land",
				description: "",
				value: "https://searchengineland.com/",
			},
			{
				label: "Search Engine Journal",
				description: "",
				value: "https://www.searchenginejournal.com/",
			},
			{
				label: "Google Search Central Tweets",
				description: "",
				value: "https://twitter.com/googlesearchc",
			},
			{
				label: "Google Algorithm Update History",
				description: "Moz Google Algorithm Update History",
				value: "https://moz.com/google-algorithm-change",
			},
		]
	},
	{
		title: "Design",
		links: [
			{
				label: "PixlrX",
				description: "",
				value: "https://pixlr.com/x/",
			},
			{
				label: "AI Image Enlarger",
				description: "",
				value: "https://bigjpg.com/en",
			},
			{
				label: "Img to Svg Converter",
				description: "",
				value: "https://picsvg.com/",
			},
			{
				label: "Affinity",
				description: "",
				value: "https://affinity.serif.com/en-us/tutorials/designer/desktop/",
			},
			{
				label: "Affinity - YT",
				description: "",
				value: "https://www.youtube.com/c/AffinityRevolution/playlists",
			},
		]
	},
	{
		title: "Dev Grooves",
		links: [
			{
				label: "Kraftwerk",
				description: "",
				value: "https://www.youtube.com/c/Kraftwerk",
			},
			{
				label: "Grateful Dead Live Collection",
				description: "",
				value: "https://archive.org/details/GratefulDead",
			},
			{
				label: "Oakenfold Essential Mixes",
				description: "Paul Oakenfold BBC Radio 1 Essential Mixes",
				value: "https://soundcloud.com/pauloakenfold/sets/bbc-radio-1-essential-mixes",
			},
			{
				label: "Paul van Dyk",
				description: "",
				value: "https://www.youtube.com/c/PaulvanDyk",
			},
			{
				label: "Khruangbin",
				description: "",
				value: "https://www.youtube.com/c/Khruangbin",
			},
			{
				label: "YouTube Music",
				description: "",
				value: "https://music.youtube.com/",
			},
			{
				label: "TIDAL",
				description: "",
				value: "https://listen.tidal.com/",
			},
		]
	},
	{
		title: "Cool Tools",
		links: [
			{
				label: "localtunnel",
				description: "Serve a local port publically without opening ports in your firewall.",
				value: "https://github.com/localtunnel/localtunnel",
			},
			{
				label: "Lando",
				description: "A local web development tool built using interlinked Docker containers.",
				value: "https://lando.dev/",
			},
			{
				label: "pyTasker",
				description: "Automate tasks on any operating system using Python.",
				value: "https://pypi.org/project/pyTasker/",
			},
			{
				label: "Guerrilla Mail",
				description: "Disposable Temporary Email Addresses",
				value: "https://www.guerrillamail.com/inbox",
			},
			{
				label: "Smush.it",
				description: "",
				value: "https://www.imgopt.com/",
			},
			{
				label: "reSmush.it",
				description: "",
				value: "https://resmush.it/",
			},
			{
				label: "DNSdumpster",
				description: "Domain research tool",
				value: "https://dnsdumpster.com/",
			},
		]
	},
]

export const images: dataElem[] = [
	{ label: "pic_1", value: pic_1 },
	{ label: "pic_2", value: pic_2 },
	{ label: "pic_3", value: pic_3 },
	{ label: "pic_4", value: pic_4 },
	{ label: "pic_5", value: pic_5 },
	{ label: "pic_6", value: pic_6 },
	{ label: "pic_7", value: pic_7 },
	{ label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
	{
		label: "DuckDuckGo",
		value: "duckduckgo.com/",
	},
	{
		label: "Google",
		value: "google.com/search",
	},
	{
		label: "Qwant",
		value: "qwant.com/",
	},
];

export type FastForwards = {
	[key: string]: string,
}

export type Search = {
	engine: string,
	fastForward: FastForwards,
}

export const searchSettings: Search = {
	engine: searchEngines[0].value,
	fastForward: {
		"deepl": "https://deepl.com/",
		"maps": "https://google.de/maps/",
		"reddit": "https://reddit.com/",
		"github": "https://github.com/",
		"gitlab": "https://gitlab.com/",
		"youtube": "https://youtube.com/",
	}
}

export type colorsType = {
	[key: string]: string
	"--bg-color": string,
	"--default-color": string,
	"--accent-color": string,
	"--accent-color2": string,
}

export type Theme = {
	name: string;
	colors: colorsType;
	image: string;
}

export const themes: Theme[] = [
	{
		name: "custom jawn",
		image: pic_9,
		colors: {
			"--bg-color": "#2E2E2E",
			"--default-color": "#E6E6E6",
			"--accent-color": "#98D59C",
			"--accent-color2": "#FAF196",
		}
	},
	{
		name: "DeathAndMilk",
		image: pic_1,
		colors: {
			"--bg-color": "#2E2E2E",
			"--default-color": "#E6E6E6",
			"--accent-color": "#FFB4E6",
			"--accent-color2": "#B4FFE6",
		},
	},
	{
		name: "Pop!OS",
		image: "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
		colors: {
			"--bg-color": "#333136",
			"--default-color": "#2BC5EB",
			"--accent-color": "#FCD307",
			"--accent-color2": "#2BC5EB",
		},
	},
	{
		name: "Dark Souls",
		image: "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
		colors: {
			"--bg-color": "#32323C",
			"--default-color": "#A0A08C",
			"--accent-color": "#9A6650",
			"--accent-color2": "#461E28",
		},
	},
	{
		name: "S.E.Lain",
		image: "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
		colors: {
			"--bg-color": "#0a1a25",
			"--default-color": "#a6b7ab",
			"--accent-color": "#94656b",
			"--accent-color2": "#57182e"
		}
	},
	{
		name: "Kitties",
		image: "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
		colors: {
			"--bg-color": "#495662",
			"--default-color": "#d1f1fa",
			"--accent-color": "#80aad4",
			"--accent-color2": "#e8a9b7"
		}
	},
	{
		name: "pretty chill",
		image: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
		colors: {
			"--bg-color": "#397d76",
			"--default-color": "#f1daba",
			"--accent-color": "#c5bdb5",
			"--accent-color2": "#93a662"
		}
	}
]
