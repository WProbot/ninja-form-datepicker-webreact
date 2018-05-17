jQuery( document ).ready( function() {

    new(Marionette.Object.extend( {

        initialize: function() {

            /*
             * Listen to the Ninja Forms backbone, alter Pikaday elements.
             */
            this.listenTo( Backbone.Radio.channel( 'pikaday' ), 'init', this.modifyDatepicker );
        },

        /*
         * Localize all the Pikaday datepickers used in the WordPress site.
         */
        modifyDatepicker: function(
            dateObject, fieldModel ) {
            dateObject.pikaday._o.i18n = {
                previousMonth : 'Vorige Maand',
                nextMonth     : 'Volgende Maand',
                months        : ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'],
                weekdays      : ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
                weekdaysShort : ['Zon','Man','Din','Woe','Don','Vri','Zat']
            };

            /*
             * Select the datepickers on field_key.
             */
            if (
            fieldModel.get ('key') == 'date_25' ||
            fieldModel.get ('key') == 'tot_en_met_1486978889913' ||
            fieldModel.get ('key') == 'date_181' ||
            fieldModel.get ('key') == 'date_182' ||
            fieldModel.get ('key') == 'brengdatum' ||
            fieldModel.get ('key') == 'ophaaldatum') {

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
                    var disabledDays = [
                        "2017-05-10",
                        "2017-05-11",
                        "2017-06-04",
                        "2017-06-05",
                        "2017-12-25",
                        "2017-12-26",
                        "2018-01-01",
                        "2018-04-01",
                        "2018-04-02",
                        "2018-04-27",
                        "2018-05-10",
                        "2018-05-20",
                        "2018-05-21",
                        "2018-12-25",
                        "2018-12-26",
                        "2019-01-01",
                        "2019-04-21",
                        "2019-04-22",
                        "2019-04-27",
                        "2019-05-30",
                        "2019-06-09",
                        "2019-12-25",
                        "2019-12-26",
                        "2020-01-01",
                        "2020-04-12",
                        "2020-04-13",
                        "2020-04-27",
                        "2020-05-05",
                        "2020-05-21",
                        "2020-05-31",
                        "2020-06-01",
                        "2020-12-25",
                        "2020-12-26",
                        "2021-01-01"
                    ];

                    if ( _.indexOf( disabledDays, moment( date ).format( "YYYY-MM-DD" ) ) !== -1  || date.getDay() === 0) {
                        return true;
                    }

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
