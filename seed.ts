import { db } from './src/lib/db'

async function seed() {
  try {
    // Create test companies
    const company1 = await db.logisticsCompany.create({
      data: {
        name: '顺丰速运',
        contact: '张经理',
        phone: '400-811-1111',
        address: '深圳市南山区科技园',
        description: '专业的快递物流服务提供商'
      }
    })

    const company2 = await db.logisticsCompany.create({
      data: {
        name: '京东物流',
        contact: '李经理',
        phone: '400-606-5500',
        address: '北京市亦庄经济开发区',
        description: '京东旗下专业物流服务'
      }
    })

    const company3 = await db.logisticsCompany.create({
      data: {
        name: '中通快递',
        contact: '王经理',
        phone: '400-827-0270',
        address: '上海市青浦区华新镇',
        description: '全国性快递物流企业'
      }
    })

    // Create test routes
    await db.route.create({
      data: {
        companyId: company1.id,
        origin: '郑州',
        destination: '北京',
        price: 150.00,
        duration: 24,
        description: '次日达服务，全程冷链运输'
      }
    })

    await db.route.create({
      data: {
        companyId: company2.id,
        origin: '郑州',
        destination: '北京',
        price: 120.00,
        duration: 36,
        description: '标准快递服务，安全可靠'
      }
    })

    await db.route.create({
      data: {
        companyId: company3.id,
        origin: '郑州',
        destination: '北京',
        price: 100.00,
        duration: 48,
        description: '经济型快递，性价比高'
      }
    })

    // Add some other routes for testing
    await db.route.create({
      data: {
        companyId: company1.id,
        origin: '上海',
        destination: '北京',
        price: 180.00,
        duration: 18,
        description: '沪京专线，快速直达'
      }
    })

    await db.route.create({
      data: {
        companyId: company2.id,
        origin: '广州',
        destination: '深圳',
        price: 50.00,
        duration: 12,
        description: '同城配送，当日达'
      }
    })

    console.log('Test data seeded successfully!')
    console.log('Created companies:', company1.name, company2.name, company3.name)
    console.log('Created routes for Zhengzhou to Beijing')

  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed()