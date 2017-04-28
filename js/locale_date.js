jQuery( document ).ready( function() {
    new(Marionette.Object.extend( {

        initialize: function() {
            this.listenTo( Backbone.Radio.channel( 'pikaday' ), 'init', this.modifyDatepicker );
        },

        //Change the strings below to translate the string in our datepicker. 
        modifyDatepicker: function( dateObject, fieldModel ) {
            dateObject.pikaday._o.i18n = {
                previousMonth : 'Vorige Maand',
                nextMonth     : 'Volgende Maand',
                months        : ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'],
                weekdays      : ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
                weekdaysShort : ['Zon','Man','Din','Woe','Don','Vri','Zat']
            };

        /*
         * The disableDayFn pikaday setting lets us disable specifc days so that the user can't select them.
         *
         * Note that if a user manually enters a disabled date, the "invalid date" text will be shown.
         *
         * The function receieves the "date" variable which represents the date currently being rendered on the calendar.
         * All the days of the month will be passed through this function.
         * Returning boolean true will disable the specific date.
         *
         * In this example, we are setting an array of "disabled days" that we don't want to allow.
         * If the date passed is in that array, we return true, which disables that day.
         *
         */
        dateObject.pikaday._o.disableDayFn = function( date ) {
            var disabledDays = ["2017-04-27", "2017-04-28" ];


            if ( _.indexOf( disabledDays, moment( date ).format( "YYYY-MM-DD" ) ) !== -1  || date.getDay() === 0) {
                return true;
            }
        }


        // dateObject.pikaday._o.disableDayFn = function(date){
        //     // Disable multiple days
        //     // return date.getDay() === 1 || date.getDay() === 2;
        //
        //     // Disable Sunday
        //     return date.getDay() === 0;
        //
        //
        // }


        /*
         * Reversing the logic above to check a list of "enabled days".
         */
        // dateObject.pikaday._o.disableDayFn = function( date ) {
        //     var enabled = ["2017-04-15", "2017-04-14", "2017-04-13"];
        //
        //     if ( _.indexOf( enabled, moment( date ).format( "YYYY-MM-DD" ) ) === -1 ) {
        //         return true;
        //     }
        // }

        /*
         * Note that if you have both snippets above in your code, the second will always override the first.
         */

        //dateObject.pikaday.setDate( '01/01/2018' );
        // dateObject.pikaday.gotoYear( '2017' );
        // dateObject.pikaday.setMinDate( new Date( 'December 21, 2016' ) );


        }
    }));
});