jQuery( document ).ready( function() {
    new(Marionette.Object.extend( {
        initialize: function() {
            this.listenTo( Backbone.Radio.channel( 'pikaday' ), 'init', this.modifyDatepicker );
        },

        /*
         * Localize the Pikaday datepicker.
         */
        modifyDatepicker: function( dateObject, fieldModel ) {
            dateObject.pikaday._o.i18n = {
                previousMonth : 'Vorige Maand',
                nextMonth     : 'Volgende Maand',
                months        : ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'],
                weekdays      : ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
                weekdaysShort : ['Zon','Man','Din','Woe','Don','Vri','Zat']
            };

        /*
         * No date selection in the past.
         */
        dateObject.pikaday._o.minDate = moment().subtract(1, 'day');

        /*
         * Set the first weekday.
         */
        dateObject.pikaday._o.firstDay = 1;

        /*
         * Disbale specific dates.
         */
        dateObject.pikaday._o.disableDayFn = function( date ) {
            var disabledDays = ["2017-05-10", "2017-05-11" ];
            console.log(settings.foo);

            if ( _.indexOf( disabledDays, moment( date ).format( "YYYY-MM-DD" ) ) !== -1  || date.getDay() === 0) {
                return true;
            }
        }

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


        // dateObject.pikaday.setDate( '01/01/2018' );
        // dateObject.pikaday.gotoYear( '2017' );
        // dateObject.pikaday.setMinDate( new Date( 'December 21, 2016' ) );


        }
    }));
});