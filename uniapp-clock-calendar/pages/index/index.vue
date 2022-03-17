<template>
	<view>
		<my-calender :clearDate="true" :showMonth="false" :insert="true" :selected="selected" :lunar="false"
			:start-date="'1990-01-01'" :end-date="'2099-01-01'" @monthSwitch="monthSwitch" @change="dateChange">
		</my-calender>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: [{
					date: '2022-03-18', // date为所需要打点的日期
					type: "abnormal" // abnormal显示为橙色点
				}, {
					date: '2022-03-19',
					type: "normal" // normal显示为蓝色点
				}],
			}
		},
		methods: {
			/**
			 * 选中日期的触发事件
			 */
			dateChange: function(e) {
				console.log(e);
			},
			/**
			 *  选中月份的触发事件
			 */
			monthSwitch:function(e){
				console.log(e);
			}
		},
	}
</script>
