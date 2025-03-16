"use client";

import React, { useRef, useState, useEffect } from "react";
import { IconButton, Menu, MenuItem, TextField, Button, Box, Divider, Popover } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Link as LinkIcon,
  Unlink as UnlinkIcon,
  Image as ImageIcon,
  Videocam as VideoIcon,
  Title as TitleIcon,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  Palette as ColorIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { TwitterPicker } from "react-color";
import { apiUrl } from "@/lib/ApiUrl";

// تابع برای تبدیل محتوا به HTML
const serializeToHtml = (content) => {
  return content.innerHTML || "";
};

// تابع برای شناسایی تگ فعلی
const getCurrentBlockTag = () => {
  const selection = window.getSelection();
  if (!selection.rangeCount) return "p";
  const node = selection.anchorNode;
  let parent = node.nodeType === 3 ? node.parentElement : node;
  while (parent && !["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(parent.tagName)) {
    parent = parent.parentElement;
  }
  return parent ? parent.tagName.toLowerCase() : "p";
};

// تابع برای بررسی وضعیت فرمت‌ها
const isFormatActive = (command) => {
  return document.queryCommandState(command);
};

const CustomEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [colorAnchorEl, setColorAnchorEl] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaAlt, setMediaAlt] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [mediaSource, setMediaSource] = useState("upload");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectionState, setSelectionState] = useState({
    bold: false,
    italic: false,
    underline: false,
    link: false,
    code: false,
  });
  const [savedRange, setSavedRange] = useState(null);

  // تابع برای بررسی لینک
  const isLinkActive = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    const node = selection.anchorNode;
    let parent = node.nodeType === 3 ? node.parentElement : node;
    while (parent && parent.tagName !== "A" && parent !== editorRef.current) {
      parent = parent.parentElement;
    }
    return parent && parent.tagName === "A";
  };

  // تابع برای بررسی کد
  const isCodeActive = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    const node = selection.anchorNode;
    let parent = node.nodeType === 3 ? node.parentElement : node;
    while (parent && parent.tagName !== "PRE" && parent !== editorRef.current) {
      parent = parent.parentElement;
    }
    return parent && parent.tagName === "PRE";
  };

  // تنظیم محتوای اولیه و همگام‌سازی
  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  // تغییر محتوا
  const handleEditorChange = () => {
    const content = serializeToHtml(editorRef.current);
    onChange(content);
  };

  // به‌روزرسانی وضعیت انتخاب
  const updateSelectionState = () => {
    setSelectionState({
      bold: isFormatActive("bold"),
      italic: isFormatActive("italic"),
      underline: isFormatActive("underline"),
      link: isLinkActive(),
      code: isCodeActive(),
    });
  };

  // ذخیره انتخاب کاربر
  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      setSavedRange(selection.getRangeAt(0));
    }
  };

  // بازیابی انتخاب کاربر
  const restoreSelection = () => {
    if (savedRange) {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(savedRange);
    }
  };

  // فرمت کردن متن
  const formatText = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
    handleEditorChange();
    updateSelectionState();
  };

  // تغییر تگ بلوک (h1 تا h6 یا p)
  const setBlockTag = (tag) => {
    document.execCommand("formatBlock", false, tag);
    editorRef.current.focus();
    handleEditorChange();
    setAnchorEl(null);
  };

  // افزودن لینک
  const addLink = () => {
    if (linkUrl) {
      restoreSelection();
      document.execCommand("createLink", false, linkUrl);
      setLinkUrl("");
      handleEditorChange();
      updateSelectionState();
    }
    setAnchorEl(null);
    editorRef.current.focus();
  };

  // حذف لینک
  const removeLink = () => {
    document.execCommand("unlink", false, null);
    editorRef.current.focus();
    handleEditorChange();
    updateSelectionState();
  };

  // تغییر رنگ متن
  const handleColorChange = (color) => {
    restoreSelection();
    document.execCommand("foreColor", false, color.hex);
    editorRef.current.focus();
    handleEditorChange();
    setColorAnchorEl(null);
  };

  // افزودن کد
  const toggleCode = () => {
    restoreSelection();
    if (isCodeActive()) {
      document.execCommand("formatBlock", false, "p");
    } else {
      const selection = window.getSelection();
      if (selection.rangeCount) {
        const range = selection.getRangeAt(0);
        const text = range.toString();
        const codeHtml = `<pre><code>${text}</code></pre>`;
        document.execCommand("insertHTML", false, codeHtml);
      }
    }
    editorRef.current.focus();
    handleEditorChange();
    updateSelectionState();
  };

  // آپلود و افزودن تصویر یا ویدیو
  const handleMediaInsert = async () => {
    let url = "";
    if (mediaSource === "upload" && selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const res = await fetch(`${apiUrl}/upload`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.url) {
          url = data.url;
        } else {
          alert("خطا در آپلود فایل");
          return;
        }
      } catch (err) {
        console.error("خطا در آپلود فایل:", err);
        alert("خطا در آپلود فایل");
        return;
      }
    } else if (mediaSource === "url" && mediaUrl) {
      url = mediaUrl;
    }

    if (url) {
      const tag =
        mediaType === "image"
          ? `<img src="${url}" alt="${mediaAlt || "تصویر"}" class="max-w-full h-auto my-2" />`
          : `<video src="${url}" controls class="max-w-full my-2"></video>`;
      document.execCommand("insertHTML", false, tag);
      handleEditorChange();
    }
    setMediaUrl("");
    setMediaAlt("");
    setSelectedFile(null);
    setAnchorEl(null);
  };

  // تنظیم ترازبندی متن
  const setAlignment = (align) => {
    document.execCommand(`justify${align}`, false, null);
    editorRef.current.focus();
    handleEditorChange();
  };

  // مدیریت رویدادهای کیبورد
  const handleKeyDown = (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      const range = selection.getRangeAt(0);
      if (range.collapsed && range.startContainer === editorRef.current) {
        e.preventDefault();
        editorRef.current.innerHTML = "";
        handleEditorChange();
      }
    }
  };

  // به‌روزرسانی وضعیت هنگام انتخاب متن
  const handleSelectionChange = () => {
    updateSelectionState();
  };

  // باز و بسته کردن منوها
  const handleMenuOpen = (event, type) => {
    saveSelection();
    setAnchorEl(event.currentTarget);
    if (type === "media") {
      setMediaType("image");
      setMediaSource("upload");
    } else if (type === "link" && selectionState.link) {
      const selection = window.getSelection();
      if (selection.rangeCount) {
        const range = selection.getRangeAt(0);
        const link = range.commonAncestorContainer.parentElement.closest("a");
        if (link) setLinkUrl(link.href);
      }
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLinkUrl("");
    setMediaUrl("");
    setMediaAlt("");
    setSelectedFile(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // پر کردن ارتفاع مودال
      }}
    >
      {/* نوار ابزار استیکی */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          p: 1,
          bgcolor: "#f5f5f5",
          borderBottom: "1px solid #ccc",
          position: "sticky",
          top: 0,
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <IconButton
          onClick={() => formatText("bold")}
          title="پررنگ"
          sx={{ bgcolor: selectionState.bold ? "#e0e0e0" : "transparent" }}
        >
          <FormatBold />
        </IconButton>
        <IconButton
          onClick={() => formatText("italic")}
          title="ایتالیک"
          sx={{ bgcolor: selectionState.italic ? "#e0e0e0" : "transparent" }}
        >
          <FormatItalic />
        </IconButton>
        <IconButton
          onClick={() => formatText("underline")}
          title="زیرخط"
          sx={{ bgcolor: selectionState.underline ? "#e0e0e0" : "transparent" }}
        >
          <FormatUnderlined />
        </IconButton>
        <IconButton onClick={() => setAlignment("Left")} title="تراز چپ">
          <FormatAlignLeft />
        </IconButton>
        <IconButton onClick={() => setAlignment("Center")} title="تراز وسط">
          <FormatAlignCenter />
        </IconButton>
        <IconButton onClick={() => setAlignment("Right")} title="تراز راست">
          <FormatAlignRight />
        </IconButton>
        <IconButton onClick={() => setAlignment("Full")} title="تراز کامل">
          <FormatAlignJustify />
        </IconButton>
        <IconButton
          id="block-menu"
          onClick={(e) => handleMenuOpen(e, "block")}
          title="نوع بلوک"
        >
          <TitleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl && anchorEl.id === "block-menu")}
          onClose={handleMenuClose}
        >
          {["h1", "h2", "h3", "h4", "h5", "h6", "p"].map((tag) => (
            <MenuItem key={tag} onClick={() => setBlockTag(tag)}>
              {tag.toUpperCase()}
            </MenuItem>
          ))}
        </Menu>
        <IconButton
          id="link-menu"
          onClick={(e) => handleMenuOpen(e, "link")}
          title="افزودن/ویرایش لینک"
          sx={{ bgcolor: selectionState.link ? "#e0e0e0" : "transparent" }}
        >
          <LinkIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl && anchorEl.id === "link-menu")}
          onClose={handleMenuClose}
        >
          <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <TextField
              label="آدرس لینک"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              size="small"
              fullWidth
            />
            <Button variant="contained" onClick={addLink}>
              {selectionState.link ? "ویرایش" : "افزودن"}
            </Button>
            {selectionState.link && (
              <Button variant="outlined" color="error" onClick={removeLink}>
                حذف لینک
              </Button>
            )}
          </Box>
        </Menu>
        <IconButton
          onClick={(e) => {
            saveSelection();
            setColorAnchorEl(e.currentTarget);
          }}
          title="رنگ متن"
        >
          <ColorIcon />
        </IconButton>
        <Popover
          open={Boolean(colorAnchorEl)}
          anchorEl={colorAnchorEl}
          onClose={() => setColorAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <TwitterPicker onChangeComplete={handleColorChange} />
        </Popover>
        <IconButton
          onClick={toggleCode}
          title="کد"
          sx={{ bgcolor: selectionState.code ? "#e0e0e0" : "transparent" }}
        >
          <CodeIcon />
        </IconButton>
        <IconButton
          id="media-menu"
          onClick={(e) => handleMenuOpen(e, "media")}
          title="افزودن تصویر/ویدیو"
        >
          <ImageIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl && anchorEl.id === "media-menu")}
          onClose={handleMenuClose}
        >
          <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1, width: 300 }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant={mediaType === "image" ? "contained" : "outlined"}
                onClick={() => setMediaType("image")}
              >
                تصویر
              </Button>
              <Button
                variant={mediaType === "video" ? "contained" : "outlined"}
                onClick={() => setMediaType("video")}
              >
                ویدیو
              </Button>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant={mediaSource === "upload" ? "contained" : "outlined"}
                onClick={() => setMediaSource("upload")}
              >
                آپلود
              </Button>
              <Button
                variant={mediaSource === "url" ? "contained" : "outlined"}
                onClick={() => setMediaSource("url")}
              >
                لینک
              </Button>
            </Box>
            {mediaSource === "upload" ? (
              <input
                type="file"
                accept={mediaType === "image" ? "image/*" : "video/*"}
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            ) : (
              <TextField
                label="آدرس فایل"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                size="small"
                fullWidth
              />
            )}
            {mediaType === "image" && (
              <TextField
                label="متن Alt"
                value={mediaAlt}
                onChange={(e) => setMediaAlt(e.target.value)}
                size="small"
                fullWidth
              />
            )}
            <Button variant="contained" onClick={handleMediaInsert}>
              درج
            </Button>
          </Box>
        </Menu>
      </Box>

      {/* بخش ویرایشگر */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <div
          ref={editorRef}
          contentEditable
          onInput={handleEditorChange}
          onKeyDown={handleKeyDown}
          onMouseUp={handleSelectionChange}
          onKeyUp={handleSelectionChange}
          className="p-4 outline-none direction-rtl text-right custom-editor"
          style={{ minHeight: "300px" }}
          suppressContentEditableWarning={true}
          placeholder="متن خود را اینجا بنویسید..."
        />
      </Box>

      <style jsx>{`
        .custom-editor h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        .custom-editor h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        .custom-editor h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 1em 0;
        }
        .custom-editor h4 {
          font-size: 1em;
          font-weight: bold;
          margin: 1.33em 0;
        }
        .custom-editor h5 {
          font-size: 0.83em;
          font-weight: bold;
          margin: 1.67em 0;
        }
        .custom-editor h6 {
          font-size: 0.67em;
          font-weight: bold;
          margin: 2.33em 0;
        }
        .custom-editor p {
          font-size: 1em;
          margin: 1em 0;
        }
        .custom-editor a {
          color: #1a73e8;
          text-decoration: underline;
          cursor: pointer;
        }
        .custom-editor pre {
          background: #f4f4f4;
          padding: 1em;
          border-radius: 4px;
          font-family: "Courier New", Courier, monospace;
          direction: ltr;
          text-align: left;
          white-space: pre-wrap;
          margin: 1em 0;
        }
        .custom-editor pre code {
          background: none;
          padding: 0;
          font-family: inherit;
        }
        .custom-editor:empty::before {
          content: "متن خود را اینجا بنویسید...";
          color: #aaa;
        }
      `}</style>
    </Box>
  );
};

export default CustomEditor;