var nes;
        $(function() {
            nes = new JSNES({
                'ui': $('#emulator').JSNESUI({
                    "Working": [
                        ['Contra', 'roms/contra.nes'],
                        ['Mario Bros.', 'roms/mario.nes'],
                        ['Punch Out.', 'roms/PunchOut.nes'],
                    ]
                })
            });
        });