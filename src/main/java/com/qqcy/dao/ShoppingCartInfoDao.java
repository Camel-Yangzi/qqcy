package com.qqcy.dao;

import java.util.List;

import com.qqcy.po.ShoppingCartInfo;

/**
 * 购物车信息数据访问层接口
 * @author 张帅哥
 *
 */
public interface ShoppingCartInfoDao {

	public void addCartInfo(ShoppingCartInfo shoppingCartInfo);
	/**
	 * 得到购物车里所有蔬菜（包括条件查询：根据蔬菜名称查找蔬菜id，在查询购物车信息是否有匹配的记录）
	 * @param vegetable
	 * @return
	 */
	public List<ShoppingCartInfo> getCartInfoList(ShoppingCartInfo shoppingCartInfo);
	
	public ShoppingCartInfo getCartInfoByV_id(ShoppingCartInfo shoppingCartInfo);
	
	public void updateCartInfoVege_num(ShoppingCartInfo shoppingCartInfo);
	
	public void updateCartInfoShi_status(ShoppingCartInfo shoppingCartInfo);
	
	public void deleteCartInfo(ShoppingCartInfo shoppingCartInfo);
	
	public void incrementVege_num(ShoppingCartInfo shoppingCartInfo);
	
	public void decrementVege_num(ShoppingCartInfo shoppingCartInfo);
	
	public List<ShoppingCartInfo> getCartInfoListByStatus(ShoppingCartInfo shoppingCartInfo);
}
