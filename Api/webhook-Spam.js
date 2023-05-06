function _0x1b24(_0x3e84c5, _0x55b53f) {
    const _0x4d2039 = _0x4d20();
    _0x1b24 = function (_0x1b2435, _0x308a08) {
        _0x1b2435 = _0x1b2435 - 0xa9;
        let _0x578505 = _0x4d2039[_0x1b2435];
        return _0x578505;
    };
    return _0x1b24(_0x3e84c5, _0x55b53f);
}
const _0x310cc0 = _0x1b24;
(function (_0x3b6cd3, _0x4f6d65) {
    const _0x3ee1b1 = _0x1b24;
    const _0x4ed9e0 = _0x3b6cd3();
    while (!![]) {
        try {
            const _0x365bd3 = -parseInt(_0x3ee1b1(0xaa)) / 0x1 + parseInt(_0x3ee1b1(0xb4)) / 0x2 + -parseInt(_0x3ee1b1(0xbe)) / 0x3 + -parseInt(_0x3ee1b1(0xd7)) / 0x4 + parseInt(_0x3ee1b1(0xb7)) / 0x5 + -parseInt(_0x3ee1b1(0xb6)) / 0x6 * (parseInt(_0x3ee1b1(0xc4)) / 0x7) + parseInt(_0x3ee1b1(0xc8)) / 0x8;
            if (_0x365bd3 === _0x4f6d65) {
                break;
            } else {
                _0x4ed9e0['push'](_0x4ed9e0['shift']());
            }
        } catch (_0x25d9f6) {
            _0x4ed9e0['push'](_0x4ed9e0['shift']());
        }
    }
}(_0x4d20, 0x691ab));
module['exports'][_0x310cc0(0xbd)] = function (_0x29a155) {
    const _0xc0f3c0 = _0x310cc0;
    process[_0xc0f3c0(0xd1)] = _0xc0f3c0(0xb3);
    const _0x1e86c6 = require(_0xc0f3c0(0xca));
    const _0x5dee8f = require(_0xc0f3c0(0xae));
    const _0x5e465b = require(_0xc0f3c0(0xa9))[_0xc0f3c0(0xd3)]({
        'input': process[_0xc0f3c0(0xc1)],
        'output': process[_0xc0f3c0(0xac)]
    });
    const _0x168211 = require(_0xc0f3c0(0xbb));
    function _0x511859() {
        const _0x3d468b = _0xc0f3c0;
        return _0x3d468b(0xd0);
    }
    const _0x475e89 = () => {
        const _0x49b5d7 = _0xc0f3c0;
        console['clear']();
        console['log'](_0x511859()[_0x49b5d7(0xaf)]);
        _0x5e465b[_0x49b5d7(0xd6)](_0x49b5d7(0xb0)['yellow'], _0x1d235a => {
            const _0x36b1d6 = _0x49b5d7;
            if (!_0x1d235a)
                return require('./Fim/index')[_0x36b1d6(0xc2)](0x2, _0x36b1d6(0xce)[_0x36b1d6(0xb5)], '', _0x5e465b, '', '', 'webhook-Spam', '');
            const _0x9988a4 = _0x5dee8f(_0x1d235a, { 'method': _0x36b1d6(0xcb) });
            if (_0x9988a4 && _0x9988a4[_0x36b1d6(0xcc)] !== 0xc8)
                return require(_0x36b1d6(0xc7))[_0x36b1d6(0xc2)](0x2, '\x0a\x20\x20\x20[-]\x20Webhookk\x20invalid\x0a\x20\x20\x20[1]\x20Retry\x0a\x20\x20\x20[2]\x20Exit'[_0x36b1d6(0xb5)], '', _0x5e465b, '', '', _0x36b1d6(0xc6), '');
            _0x5e465b[_0x36b1d6(0xd6)](_0x36b1d6(0xb1)[_0x36b1d6(0xc5)], _0x3fa7a0 => {
                const _0x3161c6 = _0x36b1d6;
                if (!_0x3fa7a0)
                    return require(_0x3161c6(0xc7))['acabou'](0x2, _0x3161c6(0xbc)[_0x3161c6(0xb5)], '', _0x5e465b, '', '', 'webhook-Spam', '');
                _0x5e465b['question'](_0x3161c6(0xb8)['yellow'], _0x40936a => {
                    const _0x1aa4a8 = _0x3161c6;
                    if (!_0x40936a)
                        return require('./Fim/index')['acabou'](0x2, '\x0a\x20\x20\x20[-]\x20Choose\x20how\x20many\x20times\x20the\x20message\x20should\x20be\x20sent\x0a\x20\x20\x20[1]\x20Retry\x0a\x20\x20\x20[2]\x20Exit'[_0x1aa4a8(0xb5)], '', _0x5e465b, '', '', 'webhook-Spam', '');
                    if (isNaN(_0x40936a))
                        return require(_0x1aa4a8(0xc7))[_0x1aa4a8(0xc2)](0x2, '\x0a\x20\x20\x20[-]\x20Define\x20only\x20in\x20number\x0a\x20\x20\x20[1]\x20Retry\x0a\x20\x20\x20[2]\x20Exit'[_0x1aa4a8(0xb5)], '', _0x5e465b, '', '', _0x1aa4a8(0xc6), '');
                    const _0x19e13b = () => {
                        const _0x59f7e7 = _0x1aa4a8;
                        const _0x4ae690 = _0x5dee8f(_0x1d235a + _0x59f7e7(0xc0), {
                            'method': _0x59f7e7(0xd5),
                            'headers': { 'content-type': 'application/json' },
                            'body': _0x59f7e7(0xab) + _0x3fa7a0 + '\x22,\x22embeds\x22:null,\x22attachments\x22:[]}'
                        })['json']();
                        if (_0x4ae690 && _0x4ae690[_0x59f7e7(0xc3)] === _0x3fa7a0) {
                            console[_0x59f7e7(0xb2)]((_0x59f7e7(0xd4) + (_0x16010b + 0x1) + '/' + _0x40936a + _0x59f7e7(0xbf))[_0x59f7e7(0xc9)]);
                        }
                        if (_0x4ae690 && _0x4ae690[_0x59f7e7(0xb9)] === _0x59f7e7(0xba)) {
                            console['log'](_0x59f7e7(0xcf) + _0x4ae690[_0x59f7e7(0xcd)] + _0x59f7e7(0xad));
                            _0x16010b - 0x1;
                            _0x19e13b();
                        }
                    };
                    for (var _0x16010b = 0x0; _0x16010b < _0x40936a; _0x16010b++)
                        _0x19e13b();
                    require(_0x1aa4a8(0xc7))[_0x1aa4a8(0xc2)](0x2, _0x1aa4a8(0xd2)[_0x1aa4a8(0xc9)], '', _0x5e465b, '', '', _0x1aa4a8(0xc6), '');
                });
            });
        });
    };
    _0x475e89();
};
function _0x4d20() {
    const _0x332b23 = [
        'content',
        '23429dLENrV',
        'yellow',
        'webhook-Spam',
        './Fim/index',
        '11885304ZJHqdy',
        'green',
        'colors',
        'GET',
        'status',
        'retry_after',
        '\x0a\x20\x20\x20[-]\x20You\x20have\x20not\x20insert\x20the\x20webhook\x0a\x20\x20\x20[1]\x20Retry\x0a\x20\x20\x20[2]\x20Exit',
        '\x20\x20\x20\x20[!]\x20The\x20resource\x20is\x20being\x20limited\x20await..\x20',
        '\x0a\x0a\x0a\x20\x20\x20\x20██╗\x20\x20\x20\x20██╗███████╗██████╗\x20██╗\x20\x20██╗\x20██████╗\x20\x20██████╗\x20██╗\x20\x20██╗\x20\x20\x20\x20███████╗██████╗\x20\x20█████╗\x20██╗\x20\x20\x20\x20██╗███╗\x20\x20\x20██╗\x0a\x20\x20\x20\x20██║\x20\x20\x20\x20██║██╔════╝██╔══██╗██║\x20\x20██║██╔═══██╗██╔═══██╗██║\x20██╔╝\x20\x20\x20\x20██╔════╝██╔══██╗██╔══██╗██║\x20\x20\x20\x20██║████╗\x20\x20██║\x0a\x20\x20\x20\x20██║\x20█╗\x20██║█████╗\x20\x20██████╔╝███████║██║\x20\x20\x20██║██║\x20\x20\x20██║█████╔╝\x20\x20\x20\x20\x20███████╗██████╔╝███████║██║\x20█╗\x20██║██╔██╗\x20██║\x0a\x20\x20\x20\x20██║███╗██║██╔══╝\x20\x20██╔══██╗██╔══██║██║\x20\x20\x20██║██║\x20\x20\x20██║██╔═██╗\x20\x20\x20\x20\x20╚════██║██╔═══╝\x20██╔══██║██║███╗██║██║╚██╗██║\x0a\x20\x20\x20\x20╚███╔███╔╝███████╗██████╔╝██║\x20\x20██║╚██████╔╝╚██████╔╝██║\x20\x20██╗\x20\x20\x20\x20███████║██║\x20\x20\x20\x20\x20██║\x20\x20██║╚███╔███╔╝██║\x20╚████║\x0a\x20\x20\x20\x20\x20╚══╝╚══╝\x20╚══════╝╚═════╝\x20╚═╝\x20\x20╚═╝\x20╚═════╝\x20\x20╚═════╝\x20╚═╝\x20\x20╚═╝\x20\x20\x20\x20╚══════╝╚═╝\x20\x20\x20\x20\x20╚═╝\x20\x20╚═╝\x20╚══╝╚══╝\x20╚═╝\x20\x20╚═══╝\x0a\x20\x0a\x0a',
        'title',
        '\x0a\x20\x20\x20[-]\x20What\x20do\x20you\x20want\x20to\x20do\x20now?\x0a\x20\x20\x20[1]\x20Retry\x0a\x20\x20\x20[2]\x20Exit',
        'createInterface',
        '\x20\x20\x20\x20[',
        'POST',
        'question',
        '3226476CsJcTs',
        'readline',
        '521432ogmvZj',
        '{\x22content\x22:\x22',
        'stdout',
        '\x20ms',
        'sync-fetch',
        'magenta',
        '\x20\x20\x20\x20[?]\x20Insert\x20webhook:\x20',
        '\x20\x20\x20\x20[?]\x20Mensagem\x20a\x20ser\x20enviada:\x20',
        'log',
        'Naha\x20Multi\x20Tools\x20-\x20Webhook\x20Spawn',
        '1566968QpkhzO',
        'red',
        '750iePnHM',
        '2491715JZqhMI',
        '\x20\x20\x20\x20[?]\x20How\x20many\x20messages\x20should\x20be\x20sent:\x20',
        'message',
        'The\x20resource\x20is\x20being\x20rate\x20limited.',
        'system-sleep',
        '\x0a\x20\x20\x20[-]\x20You\x20have\x20not\x20chosen\x20a\x20message\x20to\x20send\x0a\x20\x20\x20[1]\x20Retry\x0a\x20\x20\x20[2]\x20Exit',
        'self',
        '1771671EpJlwG',
        ']\x20Message\x20sent',
        '?wait=true',
        'stdin',
        'acabou'
    ];
    _0x4d20 = function () {
        return _0x332b23;
    };
    return _0x4d20();
}