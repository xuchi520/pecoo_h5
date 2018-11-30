<template>
  <div>
    <yd-navbar fixed height="44px" :title="title">
      <!-- <img src="" alt="" slot="right"> -->
    </yd-navbar>
    <Condition :sortList="sortList"></Condition>
  </div>
</template>
<script>
import { cateScreen, queryGoodsByKind } from '@/api/resetApi.js'
import List from '@/components/auction/List'
import Condition from '@/components/common/Condition'
export default {
  name: 'auction-list',
  data () {
    return {
      title: '商品列表',
      pageNum: 1,
      pageSize: 20,
      sortList: [
        {
          name: '价格',
          children: [
            {
              name: '默认排序',
              sort: ''
            },
            {
              name: '价格最低',
              sort: 'start_price/02'
            },
            {
              name: '价格最高',
              sort: 'start_price/01'
            }
          ]
        },
        {
          name: '开拍时间',
          children: [
            {
              name: '默认排序',
              sort: ''
            },
            {
              name: '最近开拍',
              sort: 'start_time/02'
            },
            {
              name: '最晚开拍',
              sort: 'start_time/01'
            }
          ]
        },
        {
          name: '分类',
          children: []
        },
        {
          name: '筛选',
          goPage: ''
        }
      ],
      listData: [] // 列表数据
    }
  },
  props: {

  },
  components: {
    List, Condition
  },
  methods: {
    async getCateListData (code) {
      let data = {code: code}
      try {
        let res = await cateScreen(data)
        this.sortList[2].children = res.data.result
      } catch (err) {
        console.log(err)
      }
    },
    async getListData (code) {
      let data = {
        kindCode: code,
        pageNum: 1,
        pageSize: 20
      }
      try {
        let res = await queryGoodsByKind(data)
        let obj = res.data.result
        console.log(obj)
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted () {
    const params = this.$route.query
    this.title = params.name
    this.getListData(params.code)
  }
}
</script>
<style scoped lang="scss">
</style>
