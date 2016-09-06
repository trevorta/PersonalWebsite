if (Meteor.isClient) {
    toggleImage = function() {
        img = document.getElementById("self");
        if (img.src.match(/androidify/)) {
            img.src = "me_pic.jpg";
            img.style.height = '90%';
        } else {
            img.src = "androidify.gif";
            img.style.height = '90%';
        }
        return true;
    };

    ReactiveTabs.createInterface({
        template: 'basicTabs',
        onChange: function (slug, template) {
            // This callback runs every time a tab changes.
            // The `template` instance is unique per {{#basicTabs}} block.
            console.log('[tabs] Tab has changed! Current tab:', slug);
            console.log('[tabs] Template instance calling onChange:', template);
        }
    });

    Template.myTab.helpers({
        tabs: function () {
            // Every tab object MUST have a name and a slug!
            return [
                { name: 'Home', slug: 'home' },
                { name: 'Projects', slug: 'projects' },
                { name: 'Games', slug: 'games' },
                { name: 'Blogs', slug: 'blogs' }
            ];
        },
        activeTab: function () {
            // Use this optional helper to reactively set the active tab.
            // All you have to do is return the slug of the tab.

            // You can set this using an Iron Router param if you want--
            // or a Session variable, or any reactive value from anywhere.

            // If you don't provide an active tab, the first one is selected by default.
            // See the `advanced use` section below to learn about dynamic tabs.
            return Session.get('activeTab'); // Returns "people", "places", or "things".
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
