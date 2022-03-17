<template>
	<view class="uni-calendar-item__weeks-box" :class="{
		'define-today':weeks.isDay,
		'uni-calendar-item--disable':weeks.disable,
		'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
		'uni-calendar-item--checked':(calendar.fullDate === weeks.fullDate && !weeks.isDay) ,
		'uni-calendar-item--before-checked':weeks.beforeMultiple,
		'uni-calendar-item--multiple': weeks.multiple,
		'uni-calendar-item--after-checked':weeks.afterMultiple,
		}" @click="choiceDate(weeks)">
		<view class="uni-calendar-item__weeks-box-item">
			<!-- 自定义样式请在这里添加 -->
			<text v-if="selected&&weeks.extraInfo&&weeks.extraInfo.type== 'normal'" class="uni-calendar-item__weeks-box-circle"></text>
			<text v-if="selected&&weeks.extraInfo&& weeks.extraInfo.type== 'abnormal'" class="uni-calendar-item__weeks-box-circle-abnormal"></text>
			<text class="uni-calendar-item__weeks-box-text" :class="{
				'uni-calendar-item--isDay-text': weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.date}}</text>
			<text v-if="!lunar&&!weeks.extraInfo && weeks.isDay" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				}">{{todayText}}</text>
			<text v-if="lunar&&!weeks.extraInfo" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.isDay ? todayText : (weeks.lunar.IDayCn === '初一'?weeks.lunar.IMonthCn:weeks.lunar.IDayCn)}}</text>
			<text v-if="weeks.extraInfo&&weeks.extraInfo.info" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--extra':weeks.extraInfo.info,
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.extraInfo.info}}</text>
		</view>
	</view>
</template>

<script>
	import {
		initVueI18n
	} from '@dcloudio/uni-i18n'
	import messages from './i18n/index.js'
	const {
		t
	} = initVueI18n(messages)
	export default {
		emits: ['change'],
		props: {
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			todayText() {
				return t("uni-calender.today")
			},
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.define-today {
		background-color: #ECF3FF;
		border-radius: 1000rpx;
		color: black;
	}

	.uni-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.uni-calendar-item__weeks-box-text {
		font-size: $uni-font-size-base;
		color: $uni-text-color;
		font-size: 27rpx;
	}

	.uni-calendar-item__weeks-lunar-text {
		font-size: $uni-font-size-sm;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
	}

	// edited-here-add
	.uni-calendar-item__weeks-box-item :hover {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 1000rpx;
		// background-color: #4786FF;
		// color: #FFFFFF;
	}

	// edited-here
	.uni-calendar-item__weeks-box-circle {
		position: absolute;
		top: 75%;
		right: 46rpx;
		width: 6px;
		height: 6px;
		border-radius: 5px;
		background-color: #4786FF;
	}

	.uni-calendar-item__weeks-box-circle-abnormal {
		position: absolute;
		top: 75%;
		right: 46rpx;
		width: 6px;
		height: 6px;
		border-radius: 5px;
		background-color: #FFA647;
	}

	.uni-calendar-item--disable {
		background-color: rgba(249, 249, 249, $uni-opacity-disabled);
		color: $uni-text-color-disable;
	}

	// edited-here
	.uni-calendar-item--isDay-text {
		color: black;
	}

	.uni-calendar-item--extra {
		color: $uni-color-error;
		opacity: 0.8;
	}

	// edited-here
	.uni-calendar-item--checked {
		// background-color: $uni-color-primary;
		// color: #fff;
		// opacity: 0.8;
		background-color: #4786FF;
		color: #FFFFFF;
		border-radius: 1000rpx;
	}

	.uni-calendar-item--multiple {
		background-color: $uni-color-primary;
		color: #fff;
		opacity: 0.8;
	}

	.uni-calendar-item--before-checked {
		background-color: #ff5a5f;
		color: #fff;
	}

	.uni-calendar-item--after-checked {
		background-color: #ff5a5f;
		color: #fff;
	}

	// edited-here
	.uni-calendar-item--isDay {
		background-color: #4786FF;
		color: white;
		border-radius: 1000rpx;
	}
</style>
