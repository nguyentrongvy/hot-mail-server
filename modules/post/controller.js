// @ts-check
const fs = require('fs');
const Binance = require('node-binance-api');

const BaseController = require('../../common/base-controller');
const postService = require('./service');

// function loadConfig(file) {
//     let obj;
//     fs.readFile(file, 'utf8', function (err, data) {
//         if (err) throw err;

//         obj = JSON.parse(data);

//     });
// }

class PostController extends BaseController {
    async getListPosts(req, res) {
        // const { page, length } = req.query;
        const result = await postService.getListPosts();

        res.success(result);
    }

    async getPostById(req, res) {
        const id = req.params.id;

        const result = await postService.getPostById(id);
        res.success(result);
    }

    async getInfoBinance(req, res) {
        // @ts-ignore
        const binance = new Binance().options({
            APIKEY: 'Aheg966746R1H2dtv26qi2G9zeiUOXi6atdwPA51dRtHgq1IGpVMFsfI5umlWNB8',
            APISECRET: 'Cak30rUr4Ox2YN1vbQloS88umsAlsIZiEfUHGD5ARc9RDiKppKy0jLJtsIDC4BMc',
        });

        // const result = await binance.prices();

        // const btc = result['BTCUSDT']
        // const usdtBTC = result['USDTBTC'];

        binance.futuresMiniTickerStream(miniTicker => {
            console.info(miniTicker);
        });

        res.success('');
    }

    async test(req, res) {
        res.success([1]);
    }
}

module.exports = new PostController();
