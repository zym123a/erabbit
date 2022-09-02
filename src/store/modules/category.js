//分类模块
import { topCategory } from "@/api/constants"
import { findAllCategory } from '@/api/category'
export default{
    namespaced:true,
    state(){
        return{
            //分类信息集合,依赖toCategory重新设置保证初始化不至于白屏
            categoryList:topCategory.map(item=>({
                name:item,
            }))
        }
    },
    //修改分类函数
    mutations:{
        //pload所有的分类集合
         setCategoryList(state,payload){
            state.categoryList=payload
         },
         //定义show和hide函数完成二级分类的显示隐藏
         show(state,id){
            const currCategory=state.categoryList.find(item=>item.id===id)
            currCategory.open=true
         },
         hide(state,id){
            const currCategory=state.categoryList.find(item=>item.id===id)
            currCategory.open=false
         }
    },
    //获取分类函数
    actions:{
        async getCategoryList({commit}){
            //获取分类数据
            const data=await findAllCategory()
            //给每个分类加上控制二级分类隐藏的数据
            data.result.forEach(top=>{
                top.open=false
            })
            //修改分类数据
            commit('setCategoryList',data.result)
        }
    }   
}