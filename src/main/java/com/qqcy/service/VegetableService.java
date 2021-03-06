package com.qqcy.service;

import com.qqcy.po.Vegetable;

import java.util.List;

import com.qqcy.po.Vegetable;

/**
 * 蔬菜信息的核心管理业务接口
 * @author Administrator
 *
 */

public interface VegetableService {
	/**
	 * 删除蔬菜信息
	 * @param vegetable
	 */
	public void deleteVegetable(Vegetable vegetable);
	/**
	 * 根据条件查询所有蔬菜信息
	 * @param vegetable
	 * @return
	 */
	public List<Vegetable> getVegetableList(Vegetable vegetable);
	/**
	 * 修改所有蔬菜信息
	 * @param vegetable
	 */
	public void updateVegetable(Vegetable vegetable);
	/**
	 * 根据条件查询某个学生信息
	 * @param vegetable
	 * @return
	 */
	public Vegetable getVegetable(Vegetable vegetable);
	/**
	 * 得到蔬菜的总数
	 * @param vegetable
	 * @return
	 */
	public long getCount(Vegetable vegetable);

	/**
	 * 添加商品信息
	 * @param vegetable
	 */
	public void addVegetable(Vegetable vegetable);

	/**
	 * 根据id查找蔬菜
	 * @param vegetable
	 * @return
	 */
	public Vegetable getVegetableById(Vegetable vegetable);
	
	public Vegetable getVegetableById(Integer id);
	
	public Vegetable getVegetableNumById(Integer id);
	
	/**
	 * 验证添加蔬菜时，该蔬菜是否已经上架
	 * @param vegetable
	 * @return
	 */
	public boolean validate(Vegetable vegetable);
}
