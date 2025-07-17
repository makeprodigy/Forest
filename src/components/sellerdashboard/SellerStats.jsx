import React from 'react';

// SVG Icons
const MoneyIcon = () => (
  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const PackageBoxIcon = () => (
  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const OrderIcon = () => (
  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ActivityIcon = () => (
  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SellerStats = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: '₹50,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: <MoneyIcon />,
      color: 'success'
    },
    {
      title: 'Products Listed',
      value: '45',
      change: '+3',
      changeType: 'positive',
      icon: <PackageIcon />,
      color: 'primary'
    },
    {
      title: 'Orders Completed',
      value: '300',
      change: '+8.2%',
      changeType: 'positive',
      icon: <CheckCircleIcon />,
      color: 'secondary'
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      changeType: 'positive',
      icon: <StarIcon />,
      color: 'warning'
    }
  ];

  const recentActivity = [
    { type: 'order', message: 'New order #1234 received', time: '2 min ago', status: 'pending' },
    { type: 'product', message: 'Product "Wireless Headphones" stock updated', time: '15 min ago', status: 'success' },
    { type: 'review', message: 'New 5-star review received', time: '1 hour ago', status: 'success' },
    { type: 'order', message: 'Order #1230 marked as delivered', time: '2 hours ago', status: 'success' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'order':
        return <OrderIcon />;
      case 'product':
        return <PackageBoxIcon />;
      case 'review':
        return <StarIcon />;
      default:
        return <ActivityIcon />;
    }
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100 hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center bg-${stat.color}-100 text-${stat.color}-600`}>
                {stat.icon}
              </div>
              <div className={`text-xs lg:text-sm font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive' 
                  ? 'bg-success-100 text-success-700' 
                  : 'bg-error-100 text-error-700'
              }`}>
                {stat.change}
              </div>
            </div>
            <div>
              <h3 className="text-xs lg:text-sm font-medium text-neutral-600 mb-1">{stat.title}</h3>
              <p className="text-lg lg:text-2xl font-bold text-neutral-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
        {/* Sales Chart */}
        <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6">
            <h3 className="text-base lg:text-lg font-semibold text-neutral-800 mb-2 sm:mb-0">Sales Overview</h3>
            <select className="text-sm border border-neutral-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-48 lg:h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2">
                <ChartIcon />
              </div>
              <p className="text-sm lg:text-base text-neutral-600">Sales chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100">
          <h3 className="text-base lg:text-lg font-semibold text-neutral-800 mb-4 lg:mb-6">Top Selling Products</h3>
          <div className="space-y-3 lg:space-y-4">
            {[
              { name: 'Wireless Headphones', sales: 45, revenue: '₹2,250' },
              { name: 'Smartphone Case', sales: 38, revenue: '₹1,900' },
              { name: 'Bluetooth Speaker', sales: 32, revenue: '₹1,600' },
              { name: 'USB Cable', sales: 28, revenue: '₹1,400' }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary-100 rounded-lg flex items-center justify-center text-xs lg:text-sm font-semibold text-primary-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800 text-sm lg:text-base">{product.name}</p>
                    <p className="text-xs lg:text-sm text-neutral-600">{product.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-success-600 text-sm lg:text-base">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100">
        <h3 className="text-base lg:text-lg font-semibold text-neutral-800 mb-4 lg:mb-6">Recent Activity</h3>
        <div className="space-y-3 lg:space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 lg:space-x-4 p-3 hover:bg-neutral-50 rounded-xl transition-colors duration-200">
              <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-xs lg:text-sm ${
                activity.status === 'success' ? 'bg-success-100 text-success-600' :
                activity.status === 'pending' ? 'bg-warning-100 text-warning-600' :
                'bg-neutral-100 text-neutral-600'
              }`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-neutral-800 text-sm lg:text-base truncate">{activity.message}</p>
                <p className="text-xs lg:text-sm text-neutral-600">{activity.time}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                activity.status === 'success' ? 'bg-success-100 text-success-700' :
                activity.status === 'pending' ? 'bg-warning-100 text-warning-700' :
                'bg-neutral-100 text-neutral-700'
              }`}>
                {activity.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerStats;