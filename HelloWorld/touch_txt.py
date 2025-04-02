"""
Author: wanqian6311
Version: 1.0.1
Date: 2025-04-02
Description: 生成订阅源
"""

import requests
import re
from prettytable import PrettyTable

def find_ssr_links(url):
    """从指定 URL 提取 SSR 链接"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()  # 确保请求成功
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return []

    # 改进 SSR 正则表达式
    ssr_links = re.findall(r'ssr://[a-zA-Z0-9_-]+', response.text)

    if ssr_links:
        table = PrettyTable(["Index", "SSR Link"])
        for i, link in enumerate(ssr_links, 1):
            table.add_row([i, link])
        print(table)
    else:
        print("没有找到 SSR 链接。")

    return ssr_links

def find_ss_links(url):
    """从指定 URL 提取 SS 链接"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return []

    # 改进 SS 正则表达式
    ss_links = re.findall(r'ss://[a-zA-Z0-9@%._-]+', response.text)

    if ss_links:
        table = PrettyTable(["Index", "SS Link"])
        for i, link in enumerate(ss_links, 1):
            table.add_row([i, link])
        print(table)
    else:
        print("没有找到 SS 链接。")

    return ss_links

def find_vmess_links(url):
    """从指定 URL 提取 VMESS 链接"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return []

    # 改进 VMESS 正则表达式
    vmess_links = re.findall(r'vmess://[a-zA-Z0-9+=/_-]+', response.text)

    if vmess_links:
        table = PrettyTable(["Index", "VMESS Link"])
        for i, link in enumerate(vmess_links, 1):
            table.add_row([i, link])
        print(table)
    else:
        print("没有找到 VMESS 链接。")

    return vmess_links

def write_to_file(text, filename):
    """写入文件"""
    if isinstance(text, list):
        text = '\n'.join(text)
    with open(filename, "w", encoding="utf-8") as file:
        file.write(text)
    print(f"内容已写入 {filename}")

if __name__ == "__main__":

    # 目标 URL
    target_ss_url = "https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"
    target_vmess_url = "https://github.com/Alvin9999/new-pac/wiki/v2ray%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"

    # 解析链接
    ssr_links = find_ssr_links(target_ss_url)
    ss_links = find_ss_links(target_ss_url)
    vmess_links = find_vmess_links(target_vmess_url)

    # 定义变量
    ss_file_path = "ss.txt" 
    ssr_file_path = "ssr.txt"
    vmess_file_path = "vmess.txt"

    # 写入文件
    write_to_file(ss_links, ss_file_path)
    write_to_file(ssr_links, ssr_file_path)
    write_to_file(vmess_links, vmess_file_path)